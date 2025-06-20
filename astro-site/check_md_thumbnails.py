from pathlib import Path
import yaml
import re

POSTS_DIR = Path("src/content/posts")
invalid_files = []

for md_file in POSTS_DIR.glob("*.md"):
    with open(md_file, encoding="utf-8") as f:
        content = f.read()
    if content.startswith("---"):
        frontmatter = content.split("---")[1]
        try:
            data = yaml.safe_load(frontmatter)
            thumb = data.get("thumbnail", "")
            if not isinstance(thumb, str) or not re.match(r"^https?://", thumb):
                invalid_files.append((md_file.name, thumb))
        except Exception as e:
            invalid_files.append((md_file.name, f"[YAMLエラー] {e}"))

if not invalid_files:
    print("✅ すべてのthumbnailは有効なURLです")
else:
    print("❌ 無効なthumbnailを含むファイル一覧：\n")
    for name, reason in invalid_files:
        print(f" - {name}: {reason}")
