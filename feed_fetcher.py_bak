#!/usr/bin/env python3
"""
feed_fetcher.py 最終決定版（絶対URL指定）
RSS → Markdown変換 + YAML整形 + サムネイル補完（絶対URL） + バックスラッシュ除去
"""

import feedparser
import requests
import trafilatura
import yaml
import hashlib
import os
import sys
import re
from datetime import datetime
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from dateutil import parser as dtparser

# ✅ GitHub Pages のルートURL（末尾スラッシュなし）
SITE_BASE = "https://raisex-llc.github.io/ai-news-curation-site"

ROOT = Path(__file__).resolve().parent
CONTENT_DIR = ROOT / "astro-site" / "src" / "content" / "posts"
CONTENT_DIR.mkdir(parents=True, exist_ok=True)

with open(ROOT / "rss_sources.yml", "r", encoding="utf-8") as f:
    SOURCES = yaml.safe_load(f)["sources"]

DATE_FMT_MD = "%Y-%m-%d"

def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    return text.strip("-")

def sanitize(value: str) -> str:
    if value is None:
        return ""
    return str(value).strip().replace('"', "'").replace("\\", "")

def extract_thumbnail(url, source=""):
    try:
        if source == "OpenAI Blog":
            return f"{SITE_BASE}/assets/openai_logo.png"
        elif source == "arXiv AI":
            return f"{SITE_BASE}/assets/arxiv.png"

        res = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
        soup = BeautifulSoup(res.text, "html.parser")
        og = soup.find("meta", property="og:image")
        if og and og.get("content"):
            print(f"[OGP] {url} → {og['content']}")
            return og["content"]
        tw = soup.find("meta", attrs={"name": "twitter:image"})
        if tw and tw.get("content"):
            print(f"[Twitter] {url} → {tw['content']}")
            return tw["content"]
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
    slug = slugify(title or hashlib.md5(url.encode()).hexdigest())
    dt = dtparser.parse(date)
    date_str = dt.strftime(DATE_FMT_MD)
    filename = f"{date_str}-{slug}.md"
    filepath = CONTENT_DIR / filename
    content = f"""---
title: "{sanitize(title)}"
description: "{sanitize(description)}"
summary: "{sanitize(description)}"
pubDate: "{sanitize(date)}"
source: "{sanitize(source)}"
url: "{sanitize(url)}"
thumbnail: "{sanitize(thumbnail)}"
---

"""
    filepath.write_text(content, encoding="utf-8")
    print(f"✅ saved: {filename}")

def is_valid_url(url):
    try:
        if url.startswith(f"{SITE_BASE}/assets/"):
            return True
        r = urlparse(url)
        return all([r.scheme, r.netloc])
    except:
        return False

def is_valid_date(date_str):
    try:
        dtparser.parse(date_str)
        return True
    except:
        return False

def sanitize_yaml(value, key=""):
    if value is None or str(value).strip() == "":
        if key == "url":
            return "https://example.com"
        if key == "pubDate":
            return "2000-01-01T00:00:00.000Z"
        return ""
    v = str(value).strip().replace('"', "'").replace("---", "").replace("\\", "")
    if key == "url" and not is_valid_url(v):
        return "https://example.com"
    if key == "pubDate" and not is_valid_date(v):
        return "2000-01-01T00:00:00.000Z"
    return v

def fix_all_md_files():
    print("🔧 .md YAML frontmatter 修正 & URL置換 & サムネイル補完中...")
    keys = ["title", "description", "summary", "pubDate", "source", "url", "thumbnail"]
    for filepath in CONTENT_DIR.glob("*.md"):
        try:
            text = filepath.read_text(encoding="utf-8").replace("\\", "")
            if not text.startswith("---"):
                continue
            parts = text.split("---")
            if len(parts) < 3:
                continue
            raw_yaml = parts[1]
            body = "---".join(parts[2:]).lstrip("\n")
            data = yaml.safe_load(raw_yaml)
            if not isinstance(data, dict):
                continue
            if "title" not in data or not data["title"]:
                data["title"] = "Untitled"
            if data.get("source") == "OpenAI Blog" and data.get("url", "").startswith("https://openai.com/index/"):
                data["url"] = data["url"].replace("https://openai.com/index/", "https://openai.com/blog/")
            if not data.get("thumbnail"):
                if data.get("source") == "OpenAI Blog":
                    data["thumbnail"] = f"{SITE_BASE}/assets/openai_logo.png"
                elif data.get("source") == "arXiv AI":
                    data["thumbnail"] = f"{SITE_BASE}/assets/arxiv.png"
                else:
                    data["thumbnail"] = f"{SITE_BASE}/assets/ai-icon.png"
            fixed_yaml = "---\n"
            for key in keys:
                fixed_yaml += f'{key}: "{sanitize_yaml(data.get(key), key)}"\n'
            fixed_yaml += "---\n\n" + body
            filepath.write_text(fixed_yaml, encoding="utf-8")
            print(f"🔁 修正: {filepath.name}")
        except Exception as e:
            print(f"❌ 修正失敗: {filepath.name} → {e}")

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
                print(f"🧪 CHECK URL: {link}")
                thumb = extract_thumbnail(link, source=media)
                print(f"→ EXTRACTED: {thumb}")
                if not thumb or not is_valid_url(thumb):
                    if media == "OpenAI Blog":
                        thumb = f"{SITE_BASE}/assets/openai_logo.png"
                    elif media == "arXiv AI":
                        thumb = f"{SITE_BASE}/assets/arxiv.png"
                    else:
                        thumb = f"{SITE_BASE}/assets/ai-icon.png"
                write_post(title, summary, pub, media, link, thumb)

        fix_all_md_files()
    except Exception as e:
        print(f"❌ Unhandled Error: {e}")
        sys.exit(1)

    print("✅ 完了: Markdown生成 + サムネイル絶対URL補完 + バックスラッシュ除去")
    sys.exit(0)

if __name__ == "__main__":
    main()
