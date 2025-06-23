import os
from pathlib import Path
import re
import yaml

POSTS_DIR = Path("astro-site/src/content/posts")
fixed = 0
skipped = 0

print("🔧 OpenAI Blog のURLを一括修正中...")

for filepath in POSTS_DIR.glob("*.md"):
    try:
        text = filepath.read_text(encoding="utf-8")

        if not text.startswith("---"):
            skipped += 1
            continue

        parts = text.split("---")
        if len(parts) < 3:
            skipped += 1
            continue

        raw_yaml = parts[1]
        body = "---".join(parts[2:]).lstrip("\n")

        data = yaml.safe_load(raw_yaml)
        if not isinstance(data, dict):
            skipped += 1
            continue

        source = data.get("source", "")
        url = data.get("url", "")

        if source == "OpenAI Blog" and isinstance(url, str) and url.startswith("https://openai.com/index/"):
            # 置換処理
            new_url = url.replace("https://openai.com/index/", "https://openai.com/blog/")
            data["url"] = new_url

            # 書き戻し
            keys = ["title", "description", "summary", "pubDate", "source", "url", "thumbnail"]
            fixed_yaml = "---\n"
            for key in keys:
                value = str(data.get(key, "")).strip().replace('"', "'").replace("---", "")
                fixed_yaml += f'{key}: "{value}"\n'
            fixed_yaml += "---\n\n" + body

            filepath.write_text(fixed_yaml, encoding="utf-8")
            print(f"✅ 修正: {filepath.name}")
            fixed += 1
        else:
            skipped += 1

    except Exception as e:
        print(f"❌ エラー: {filepath.name} → {e}")
        skipped += 1

print(f"\n✅ 完了: 修正 {fixed} 件 / スキップ {skipped} 件")
input("Enterキーで終了")
