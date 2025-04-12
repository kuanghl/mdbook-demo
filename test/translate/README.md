参考以下mdbook示例, 添加一个常驻按钮放在support按钮的左侧，用来选择`语言`类型，当切换语言类型之后，启动翻译成选中的语言: 
1. book.toml内容:

```
[book]
authors = ["yexiyue"]
language = "zh"
multilingual = false
src = "src"
title = "dialogue macro"

[output.html]
additional-js = ["theme/custom/main.js", "theme/custom/support.js"]
additional-css = ["theme/custom/translate.css"]
```

2. index.hbs中相关内容

```hbs
<script src="https://cdn.staticfile.net/translate.js/3.1.2/translate.js"></script>

<span id="translate"></span>
```

3. translate.css中内容

```css
#translateSelectLanguage {
  width: 100px;
  outline: none;
  padding: 2px 6px;
  border-radius: 4px;
}

#translate {
  display: inline-block;
  width: 100px;
}
```

4. main.js中内容

```js
//设置机器翻译服务通道，直接客户端本身，不依赖服务端 。相关说明参考 http://translate.zvo.cn/43086.html
// translate.service.use("client.edge");
translate.ignore.class.push("icon-button");
translate.ignore.class.push("theme-popup");
//进行翻译
translate.execute();
translate.request.listener.start();
```
 
5. support.js中的内容

```js
// Add heart
const div_right = document.querySelector('#menu-bar > div.right-buttons')
const sponsor_html = '<a href="https://patreon.com/gist_rs" title="Sponsor" aria-label="Sponsor" target="_blank" rel="noopener"><i id="sponsor-button" class="fa fa-heart fa-beat beat-fade"></i></a>'
div_right.innerHTML = sponsor_html + div_right.innerHTML
```
