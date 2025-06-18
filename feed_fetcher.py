#!/usr/bin/env python3
## 🐍 feed_fetcher.py
"""RSS -> Markdown 生成スクリプト
実行すると astro-site/src/content/posts/ に .md を追加する。
"""
import feedparser
import requests
import trafilatura
import yaml
import hashlib
import os
from datetime import datetime
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
CONTENT_DIR = ROOT / "astro-site" / "src" / "content" / "posts"
CONTENT_DIR.mkdir(parents=True, exist_ok=True)

with open(ROOT / "rss_sources.yml", "r", encoding="utf-8") as f:
    SOURCES = yaml.safe_load(f)["sources"]

DATE_FMT_MD = "%Y-%m-%d"

def slugify(text: str) -> str:
    text = text.lower().replace(" ", "-")
    text = re.sub(r'[\\/:*?"<>|]', '', text)
    text = text.replace("/", "-").replace("&", "and")
    return text[:80]

def sanitize_content(text: str) -> str:
    text = re.sub(r'hf_[a-zA-Z0-9]{10,}', '[REDACTED_TOKEN]', text)
    text = re.sub(r'gh[pousr]_[a-zA-Z0-9]{20,}', '[REDACTED_TOKEN]', text)
    return text

def fetch_article_content(url: str) -> str:
    try:
        res = requests.get(url, timeout=10)
        res.raise_for_status()
        # ✅ content (bytes) を trafilatura に渡すことで内部エンコーディング処理を任せる
        return trafilatura.extract(res.content) or ""
    except Exception as e:
        print(f"[ERROR] fail extract {url}: {e}")
        return ""

def make_frontmatter(meta: dict) -> str:
    import yaml as _y
    fm = _y.dump(meta, allow_unicode=True, sort_keys=False)
    return f"---\n{fm}---\n\n"

def main():
    print(f"[DEBUG] 読み込んだソース数: {len(SOURCES)}")
    for s in SOURCES:
        print(f"[DEBUG] ソース名: {s['name']} - {s['url']}")
        feed = feedparser.parse(s["url"])
        if feed.bozo:
            print(f"[ERROR] {s['name']} RSS取得エラー: {feed.bozo_exception}")
        else:
            print(f"[DEBUG] {s['name']} - entries数: {len(feed.entries)}")
        for entry in feed.entries:
            date_prefix = datetime.utcnow().strftime(DATE_FMT_MD)
            slug_base = slugify(entry.title)
            uid_hash = hashlib.md5(entry.link.encode()).hexdigest()[:6]
            slug = f"{date_prefix}-{slug_base}-{uid_hash}"
            md_path = CONTENT_DIR / f"{slug}.md"
            if md_path.exists():
                continue

            body = fetch_article_content(entry.link)
            if not body:
                continue

            body = sanitize_content(body)

            front = {
                "title": entry.title,
                "description": entry.get("summary", ""),
                "pubDate": entry.get("published", datetime.utcnow().isoformat()),
                "source": s["name"],
                "tags": s.get("tags", []),
                "url": entry.link,
            }
            with open(md_path, "w", encoding="utf-8") as f:
                f.write(make_frontmatter(front))
                f.write(body)
            print(f"[INFO] saved {md_path}")

if __name__ == "__main__":
    main()