#!/usr/bin/env python3
"""
feed_fetcher.py
RSS → Markdown 変換 + サムネイル画像抽出
astro-site/src/content/posts/ に .md を追加する。
"""

import feedparser
import requests
import trafilatura
import yaml
import hashlib
import os
import sys
from datetime import datetime
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parent
CONTENT_DIR = ROOT / "astro-site" / "src" / "content" / "posts"
CONTENT_DIR.mkdir(parents=True, exist_ok=True)

# ✅ RSS URL一覧を読み込む
with open(ROOT / "rss_sources.yml", "r", encoding="utf-8") as f:
    SOURCES = yaml.safe_load(f)["sources"]

DATE_FMT_MD = "%Y-%m-%d"


def slugify(text: str) -> str:
    return (
        text.lower()
        .replace(" ", "-")
        .replace("/", "-")
        .replace(":", "-")
        .replace("?", "")
        .replace("&", "")
        .replace("=", "")
    )


def extract_thumbnail(url):
    """OGP画像・Twitterカード・imgタグから画像URL抽出（絶対パス対応 + ログ出力）"""
    try:
        res = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
        soup = BeautifulSoup(res.text, "html.parser")

        # OGP画像
        og = soup.find("meta", property="og:image")
        if og and og.get("content"):
            print(f"[OGP] {url} → {og['content']}")
            return og["content"]

        # Twitterカード
        tw = soup.find("meta", attrs={"name": "twitter:image"})
        if tw and tw.get("content"):
            print(f"[Twitter] {url} → {tw['content']}")
            return tw["content"]

        # 最初の img タグ → 絶対URL化
        img = soup.find("img")
        if img and img.get("src"):
            abs_url = urljoin(url, img["src"])
            print(f"[img tag] {url} → {abs_url}")
            return abs_url

    except Exception as e:
        print(f"[thumbnail error] {url} → {e}")
    print(f"[No image found] {url}")
    return ""


def write_post(title, description, date, source, url, thumbnail):
    try:
        slug = slugify(title or hashlib.md5(url.encode()).hexdigest())
        # ✅ 修正ポイント：+0000 形式に対応（%Z → %z）
        dt = datetime.strptime(date, "%a, %d %b %Y %H:%M:%S %z")
        date_str = dt.strftime(DATE_FMT_MD)
        filename = f"{date_str}-{slug}.md"
        filepath = CONTENT_DIR / filename

        content = f"""---
title: {title or 'Untitled'}
description: "{description.strip().replace('"', "'") if description else ''}"
pubDate: {date}
source: {source}
url: {url}
thumbnail: {thumbnail}
---

"""
        filepath.write_text(content, encoding="utf-8")
        print(f"✅ saved: {filename}")
    except Exception as e:
        print(f"❌ Failed to write post '{title}': {e}")
        raise


def main():
    try:
        for source in SOURCES:
            url = source["url"]
            media = source["name"]
            feed = feedparser.parse(url)
            print(f"📰 {media} - {url}")

            for entry in feed.entries:
                title = entry.get("title", "")
                summary = entry.get("summary", "")
                link = entry.get("link", "")
                pub = entry.get("published", "")

                if not title or not pub or not link:
                    continue

                thumb = extract_thumbnail(link)
                write_post(title, summary, pub, media, link, thumb)
    except Exception as e:
        print(f"\n❌ Unhandled Error: {e}")
        sys.exit(1)

    sys.exit(0)


if __name__ == "__main__":
    main()
