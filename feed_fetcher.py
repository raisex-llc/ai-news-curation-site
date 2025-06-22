#!/usr/bin/env python3
"""
RSS → Markdown 変換 + サムネイル画像抽出
astro-site/src/content/posts/ に .md を追加する。
"""

import feedparser
import requests
import trafilatura
import yaml
import hashlib
import os
from datetime import datetime
from pathlib import Path
from bs4 import BeautifulSoup

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
    """OGP画像・Twitterカード・imgタグから画像URL抽出"""
    try:
        res = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
        soup = BeautifulSoup(res.text, "html.parser")

        # OGP画像優先
        og = soup.find("meta", property="og:image")
        if og and og.get("content"):
            return og["content"]

        # Twitterカード fallback
        tw = soup.find("meta", attrs={"name": "twitter:image"})
        if tw and tw.get("content"):
            return tw["content"]

        # 最初の img タグ fallback
        img = soup.find("img")
        if img and img.get("src"):
            return img["src"]

    except Exception as e:
        print(f"[thumbnail error] {url} → {e}")
    return ""


def write_post(title, description, date, source, url, thumbnail):
    slug = slugify(title or hashlib.md5(url.encode()).hexdigest())
    dt = datetime.strptime(date, "%a, %d %b %Y %H:%M:%S %Z")
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


def main():
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


if __name__ == "__main__":
    main()
