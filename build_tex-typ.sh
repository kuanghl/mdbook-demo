#!/usr/bin/bash
#!/bin/sh

set -e

# 获取脚本当前路径
if [ -n "$BASH" ]; then
    _SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}")
else
    _SCRIPT_DIR=$(dirname "$0")
fi
SCRIPT_DIR=$(cd "$_SCRIPT_DIR" && pwd)
TEXTYP_ROOT_DIR=$SCRIPT_DIR/src/images

# 设置环境变量
export PATH="$PATH:$SCRIPT_DIR/bin:$SCRIPT_DIR/bin/tools"

# 递归遍历images目录下所有.tex和.typ文件生成.pdf和.svg
find "$TEXTYP_ROOT_DIR" -type f \( -name "*.tex" -o -name "*.typ" \) | while IFS= read -r file; do
    # 获取文件所在目录和文件名
    dir_path=$(dirname "$file")
    filename=$(basename "$file")
    
    # 进入文件所在目录
    if cd "$dir_path"; then
        case "$filename" in
            *.tex)
                # 使用tectonic编译.tex文件（参考网页11）
                output_pdf="${filename%.tex}.pdf"
                tectonic "./$filename"
                pdftocairo $output_pdf ${filename%.tex}.svg -svg -r 600
                echo "[TECTONIC] Compiled $file → $output_pdf"
                ;;
            *.typ)
                # 使用typst编译.typ文件（参考网页13）
                output_pdf="${filename%.typ}.pdf"
                typst compile "./$filename" "./$output_pdf"
                pdftocairo $output_pdf ${filename%.typ}.svg -svg -r 600
                echo "[TYPST] Compiled $file → $output_pdf"
                ;;
        esac
        cd - >/dev/null  # 返回上级目录
    else
        echo "[ERROR] Failed to enter directory: $dir_path"
    fi
done