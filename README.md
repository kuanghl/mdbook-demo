
### Introduce.
- 📚 Step by step mdBook deploy to github page with github actions, it should be simple but https://github.com/peaceiris/actions-mdbook guide confusing me “a lot”. 
Luckily I found [this tuts](https://users.rust-lang.org/t/experience-about-deploying-mdbook-on-github-using-github-action/81408) which save me a lot of time and as usual here’s my compilation for my own sake.

### How to use.
1. Use template: https://github.com/zjp-CN/mdbook-template
   
   ![Get tamplate](https://cdn.jsdelivr.net/gh/kuanghl/pictures_bed/images/20231109105921.png)

2. Goto your Github repos then `Setting` → `Pages` and select `Deploy from branch` via `main` and pathroot as see below. 👇

   ![Setting](https://cdn.jsdelivr.net/gh/kuanghl/pictures_bed/images/20231109105816.png)

3. Then `git push` and things.should be all green. ✅

   ![Init push](https://cdn.jsdelivr.net/gh/kuanghl/pictures_bed/images/20231109105628.png)

4. Browse your page and you should see it’s up and running.

   ![Config 0](https://cdn.jsdelivr.net/gh/kuanghl/pictures_bed/images/20231109105532.png)

5. Then the setting switch back to `Github Actions`.
   
   ![Config 1](https://cdn.jsdelivr.net/gh/kuanghl/pictures_bed/images/20231109105438.png)

6. An try add something to `/src/chapter_1.md` and `git push` to see the change after build complete.
   
   ![Actions build](https://cdn.jsdelivr.net/gh/kuanghl/pictures_bed/images/20231109105340.png)

7. Cool, it’s working `Hello World!`
   
   ![Hello World](https://cdn.jsdelivr.net/gh/kuanghl/pictures_bed/images/20231109104809.png)

8. [Build and run on local](https://rust-lang.github.io/mdBook/cli/index.html)
   
   ```yml
   # Install mdbook
   cargo install mdbook
   # Because template need this. // See book.toml
   cargo install mdbook-theme
   # You will need new terminal for this one.
   mdbook serve
   ```

9.  __Gotcha!__ if you found that [localhost:3000 appear `404`](https://github.com/zjp-CN/mdbook-template/issues/3) try stop the server first and remove these lines in `book.toml` then `mdbook serve` again. 
   
       ```yml
       [output.theme-ace]
       theme-white = "xcode"
       theme-dark = "monokai"
       ```

### End.
- Hope this help! Oh I’m now (try to) become a Rustacean 🦀 so my blog from now on will be mostly my`Rust` and `Wasm` journey! So fun!