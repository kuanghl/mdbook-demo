### Reference.
- [mdbook-catppuccin](https://github.com/catppuccin/mdBook.git)
- [mdbook-admonish](https://github.com/tommilligan/mdbook-admonish.git)
- [mdbook-mermaid](https://github.com/badboy/mdbook-mermaid.git)
- [mdbook-pdf](https://github.com/HollowMan6/mdbook-pdf.git)
- [mdbook-katex](https://github.com/lzanini/mdbook-katex.git)
- [mdbook-linkcheck](https://github.com/Michael-F-Bryan/mdbook-linkcheck.git)
- [mdbook-toc](https://github.com/badboy/mdbook-toc.git)
- [mdbook-latex](https://github.com/lbeckman314/mdbook-latex.git)
- [mdbook-svgbob](https://github.com/boozook/mdbook-svgbob.git)
- [mdbook-kroki-preprocessor](https://github.com/JoelCourtney/mdbook-kroki-preprocessor.git)
- [mdbook-i18n-helpers](https://github.com/google/mdbook-i18n-helpers.git)
- [mdbook-pandoc](https://github.com/max-heller/mdbook-pandoc.git)
- License-MIT. Give me a star, if this case is useful to you.
- Build mdbooks plugins in rust.
  ```sh
  cargo build --release
  cargo build
  ```

### Local env.

```sh
export PATH="$PATH:$(pwd)/bin"
sudo apt install chromium-browser
pip install mdbook-pdf-outline
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
