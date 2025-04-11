### Reference.
- [mdbook-catppuccin](https://github.com/catppuccin/mdBook.git)
- [mdbook-admonish](https://github.com/tommilligan/mdbook-admonish.git)
- [mdbook-mermaid](https://github.com/badboy/mdbook-mermaid.git)
- [mdbook-pdf](https://github.com/HollowMan6/mdbook-pdf.git)
- [mdbook-katex](https://github.com/lzanini/mdbook-katex.git)
- [mdbook_katex_static_css](https://github.com/SichangHe/mdbook_katex_static_css.git)
- [mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck.git)
- [mdbook-toc](https://github.com/badboy/mdbook-toc.git)
- [mdbook-latex](https://github.com/lbeckman314/mdbook-latex.git)
- [mdbook-svgbob](https://github.com/boozook/mdbook-svgbob.git)
- [mdbook-kroki-preprocessor](https://github.com/JoelCourtney/mdbook-kroki-preprocessor.git)
- [mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers.git)
- [mdbook-pandoc](https://github.com/max-heller/mdbook-pandoc.git)
- [cloud-translate](https://github.com/mgeisler/cloud-translate.git)
- [mdbook_zh](https://github.com/Sunshine40/mdBook.git)
- [mdbook-whichlang](https://github.com/phoenixr-codes/mdbook-whichlang.git)
- [mdbook-langtabs](https://github.com/nx10/mdbook-langtabs.git)
- [mdbook-alerts](https://github.com/lambdalisue/rs-mdbook-alerts.git)
- [mdbook-asciidoc](https://github.com/daviddrysdale/mdbook-asciidoc.git)
- [mdbook-embedify](https://github.com/MR-Addict/mdbook-embedify.git) 
- License-MIT. Give me a star, if this case is useful to you.
- Build mdbooks plugins in rust.
  ```sh
  cargo build --release
  cargo build
  # get the binaries of execution to the bin.
  ```

### GPT Translation.

- env setup

```sh
python3 -m venv ~/lang
source ~/lang/bin/activate
pip install -r requirements.txt
./translations.py
./translations.sh xx
```

### How to use.

```sh
git clone https://github.com/kuanghl/mdbook-demo.git
```
- 1. A new repository.
- 2. `Setting --> Pages --> Build and deployment --> Github Actions`.
- 3. Edit `src/SUMMARY.md` and `.md` file.
- 4. Edit `book.toml`
- 5. Push the demo to your repository.

###  Local test.

```sh
# linux
sudo apt-get update
sudo apt-get install language-pack-zh-hans
sudo update-locale LANG=zh_CN.UTF-8
sudo apt-get install chromium-browser
cargo uninstall mdbook
pip install mdbook-pdf-outline
export PATH="$PATH:$(pwd)/bin"
mdbook build
mdbook serve --open
mdbook_zh build
mdbook_zh serve --open

# windows
# vscode open workspace
# open terminal
pip install mdbook-pdf-outline
set PATH=%PATH%;%CD%\bin_win
$env:PATH += ";$(Get-Location)\bin_win"
cd mdbook-demo
mdbook.exe build
mdbook.exe serve --open
mdbook_zh.exe build
mdbook_zh.exe serve --open
```

### Note.

> Put `katex.min.css` in root folder, otherwise the format incorrect.

> `cargo uninstall mdbook` keep 0.4.36, otherwise the format incorrect.

> `mdbook-katex` use `x86_64-pc-windows-gnu.zip` version, otherwise the katex format incorrect.

> `mdbook` search chinese support as list.

```ini
[book]
authors = ["khl <1365342449@qq.com>"]
title = "mdbook-demo"
description = "The example book covers examples."
language = "zh-Hans" # "en"
```