// // 添加一个语言切换按钮在左边最前面,添加位置位于index.hbs文件的right-buttons之后
// const div_right = document.querySelector('#menu-bar > div.right-buttons')
// // const translate_html = '<a title="Translate" aria-label="Translate" target="_blank" rel="noopener"><i id="translate" ></i></a>'
// const translate_html = '<button id="translate" class="icon-button" type="button" title="Change language" aria-label="Change language"><i class="fa fa-globe"></i> </button>'
// div_right.innerHTML = translate_html + div_right.innerHTML

//设置机器翻译服务通道，直接客户端本身，不依赖服务端 。相关说明参考 http://translate.zvo.cn/43086.html
// translate.service.use("client.edge");

// 语言选择下拉框
// translate.selectLanguageTag.languages = 'english,chinese_simplified,korean';

// 忽略翻译的class id
translate.ignore.class.push("icon-button");
translate.ignore.class.push("theme-popup");
translate.ignore.class.push('MathJax'); 
translate.ignore.class.push('katex-src'); 
translate.ignore.class.push('katex-display');
translate.ignore.class.push('chapter-item');

//进行翻译
translate.execute();
translate.request.listener.start();