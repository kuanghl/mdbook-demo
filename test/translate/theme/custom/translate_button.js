// // 添加一个语言切换按钮在左边最前面,添加位置位于index.hbs文件的right-buttons之后
// const div_right = document.querySelector('#menu-bar > div.right-buttons')
// // const translate_html = '<a title="Translate" aria-label="Translate" target="_blank" rel="noopener"><i id="translate" ></i></a>'
// const translate_html = '<a id="translate" class="icon-button" type="button" title="Change language" aria-label="Change language"><i class="fa fa-globe"></i> </a>'
// div_right.innerHTML = translate_html + div_right.innerHTML

//设置机器翻译服务通道，直接客户端本身，不依赖服务端 。相关说明参考 http://translate.zvo.cn/43086.html
// translate.service.use("client.edge");
translate.ignore.class.push("icon-button");
translate.ignore.class.push("theme-popup");
//进行翻译
translate.execute();
translate.request.listener.start();