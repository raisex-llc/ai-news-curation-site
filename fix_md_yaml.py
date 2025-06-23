"""
fix_md_yaml.py
md記事用整形コード
"""
import os
import yaml
import re
from pathlib import Path
from urllib.parse import urlparse
from dateutil.parser import parse as date_parse

print("🚀 .md ファイルの YAML frontmatter を強化修正中...")

POSTS_DIR = Path("astro-site/src/content/posts")
fixed = 0
skipped = 0

def is_valid_url(url):
    try:
        r = urlparse(url)
        return all([r.scheme, r.netloc])
    except:
        return False

def is_valid_date(date_str):
    try:
        date_parse(date_str)
        return True
    except:
        return False

def sanitize(value, key=""):
    """YAML用に値を整形 + pubDate/urlのバリデーション"""
    if value is None or str(value).strip() == "":
        if key == "url":
            return "https://example.com"
        if key == "pubDate":
            return "2000-01-01T00:00:00.000Z"
        return ""
    v = str(value).strip().replace('"', "'").replace("---", "")
    if key == "url" and not is_valid_url(v):
        return "https://example.com"
    if key == "pubDate" and not is_valid_date(v):
        return "2000-01-01T00:00:00.000Z"
    return v

def fallback_title_from_text(text):
    match = re.search(r'title:\s*(.+)', text)
    if match:
        return sanitize(match.group(1).strip('"').strip("'"))
    return "Untitled"

for filepath in POSTS_DIR.glob("*.md"):
    try:
        text = filepath.read_text(encoding="utf-8")

        if not text.startswith("---"):
            print(f"⏩ スキップ: {filepath.name} → frontmatter なし")
            skipped += 1
            continue

        parts = text.split("---")
        if len(parts) < 3:
            print(f"⏩ スキップ: {filepath.name} → frontmatter 構造不正")
            skipped += 1
            continue

        raw_yaml = parts[1]
        body = "---".join(parts[2:]).lstrip("\n")

        try:
            data = yaml.safe_load(raw_yaml)
            if not isinstance(data, dict):
                raise ValueError("YAMLが辞書形式でない")
        except Exception:
            print(f"⚠️ YAML解析失敗: {filepath.name} → 最小構成で復旧")
            data = {}

        keys = ["title", "description", "summary", "pubDate", "source", "url", "thumbnail"]
        if "title" not in data or not data.get("title"):
            data["title"] = fallback_title_from_text(raw_yaml)

        fixed_yaml = "---\n"
        for key in keys:
            fixed_yaml += f'{key}: "{sanitize(data.get(key), key)}"\n'
        fixed_yaml += "---\n\n" + body

        filepath.write_text(fixed_yaml, encoding="utf-8")
        print(f"✅ 修正済: {filepath.name}")
        fixed += 1

    except Exception as e:
        print(f"❌ エラー: {filepath.name} → {e}")
        skipped += 1

print(f"\n✅ 完了: 修正 {fixed} 件 / スキップ {skipped} 件")
input("Enterキーで終了")
