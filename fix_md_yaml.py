import os
import yaml
from pathlib import Path

print("🚀 .md ファイルの YAML frontmatter を一括修正中...")

POSTS_DIR = Path("astro-site/src/content/posts")
fixed = 0
skipped = 0

def sanitize(value):
    if value is None:
        return ""
    return str(value).strip().replace('"', "'")

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
        data = yaml.safe_load(raw_yaml)

        keys = ["title", "description", "summary", "pubDate", "source", "url", "thumbnail"]
        fixed_yaml = "---\n"
        for key in keys:
            fixed_yaml += f'{key}: "{sanitize(data.get(key))}"\n'
        fixed_yaml += "---\n\n" + body

        filepath.write_text(fixed_yaml, encoding="utf-8")
        print(f"✅ 修正済: {filepath.name}")
        fixed += 1

    except Exception as e:
        print(f"❌ エラー: {filepath.name} → {e}")
        skipped += 1

print(f"\n✅ 完了: 修正 {fixed} 件 / スキップ {skipped} 件")
input("Enterキーで終了")
