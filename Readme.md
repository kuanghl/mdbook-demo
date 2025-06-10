### Reference.

1. mdbook plugins.

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
- [comprehensive-rust](https://github.com/google/comprehensive-rust.git)
- [mdbook-emojicodes](https://github.com/blyxyas/mdbook-emojicodes.git)
- [mdbook-echarts](https://github.com/zhuangbiaowei/mdbook-echarts.git)
- [mdbook-pikchr](https://github.com/podsvirov/mdbook-pikchr.git)
- [bytefield-svg](https://github.com/LMinJae/bytefield-svg-browser-wrapper.git)
- [wavedrom-rs](https://github.com/coastalwhite/wavedrom-rs.git)
- License-MIT. Give me a star, if this case is useful to you.
- Build mdbooks plugins in rust.
  ```sh
  cargo build --release
  cargo build
  # get the binaries of execution to the bin.
  ```

2. other tools.

- [typst-as-library](https://github.com/tfachmann/typst-as-library.git)
- [tectonic](https://github.com/tectonic-typesetting/tectonic.git)
- [typst](https://github.com/typst/typst.git)
- [pdf2img](https://github.com/shawkui/pdf2img)
```sh
# tectonic: https://erasin.wang/latex-quick/
# V1 https://tectonic-typesetting.github.io/book/latest/ref/v1cli.html
./tectonic --help
./tectonic ./dft-choices.tex
./tectonic ./dft-choices.tex -o ../
# V2 https://tectonic-typesetting.github.io/book/latest/ref/v2cli.html
tectonic -X new latexproject
cd latexproject
tectonic -X compile ./dft-choices.tex
tectonic -X build
# New project
tectonic -X new project_name
cd project_name
tectonic -X build
tectonic -X watch

# typst: https://lib.rs/crates/typst-cli
./typst --help
./typst compile atomistic-gpu-batching.typ
./typst compile atomistic-gpu-batching.typ atomistic-gpu-batching.pdf
./typst compile atomistic-gpu-batching.typ atomistic-gpu-batching.svg
./typst compile atomistic-gpu-batching.typ atomistic-gpu-batching.png
./typst watch atomistic-gpu-batching.typ 
# New project
# https://typst.app/universe/search/?kind=templates
typst init @preview/basic-resume:0.2.8
cd basic-resume
typst compile main.typ
typst watch main.typ

# pdftocairo: https://www.linux-man.cn/command/pdftocairo/
pdftocairo -v
pdftocairo -h
pdftocairo {{path/to/file.pdf}} -jpeg
pdftocairo {{path/to/file.pdf}} {{output.pdf}} -pdf -expand
pdftocairo {{path/to/file.pdf}} {{output.svg}} -svg -f {{first_page}} -l {{last_page}}
pdftocairo {{path/to/file.pdf}} {{output.png}} -png -r 200
pdftocairo {{path/to/file.pdf}} -tiff -gray -paper A3
pdftocairo {{path/to/file.pdf}} -png -x {{x_pixels}} -y {{y_pixels}}
pdftocairo dist/atomistic-gpu-batching.pdf ./../output.svg -svg -r 600
```

### Some HostEnv.

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
sudo apt-get install language-pack-zh-hans gettext
sudo update-locale LANG=zh_CN.UTF-8
sudo apt-get install chromium-browser poppler-utils
cargo uninstall mdbook
pip install mdbook-pdf-outline
export PATH="$PATH:$(pwd)/bin:$(pwd)/bin/tools"
mdbook build
mdbook serve --open
mdbook_zh build
mdbook_zh serve --open

# windows
# vscode open workspace
# open terminal
pip install mdbook-pdf-outline
set PATH=%PATH%;%CD%\bin_win;%CD%\bin_win\tools;;%CD%\bin_win\tools\pdftocairo
$env:PATH += ";$(Get-Location)\bin_win;$(Get-Location)\bin_win\tools;$(Get-Location)\bin_win\tools\pdftocairo"
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

> `mdbook-whichlang` c++ code blocks change, to judge the c++ code blocks and hightline.

- open `whichlang.js` file and change to below code.
- from `var siCplusplus = { title: "C++", slug: "cplusplus", get svg() {` to `var siCplusplus = { title: "C++", slug: "cpp", get svg() {`.
- need \`\`\`cplusplus to  \`\`\`cpp for code blocks.
- [open .svg picture with text can get the svg drawing information(path)](https://blog.csdn.net/qq_45021462/article/details/113868961), write the information to `whichlang.js` to add new language support.