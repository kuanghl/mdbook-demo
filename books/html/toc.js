// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="test/chapter_1.html">mdbook_demo</a></li><li class="chapter-item "><a href="3rd/pybind11/00.pybind11介绍.html">pybind11</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="3rd/pybind11/01.改动日志.html">改动日志</a></li><li class="chapter-item "><a href="3rd/pybind11/02.更新指南.html">更新指南</a></li><li class="chapter-item "><a href="3rd/pybind11/03.安装说明.html">安装说明</a></li><li class="chapter-item "><a href="3rd/pybind11/04.首次尝试.html">首次尝试</a></li><li class="chapter-item "><a href="3rd/pybind11/05.面对对象编程.html">面对对象编程</a></li><li class="chapter-item "><a href="3rd/pybind11/06.构建系统.html">构建系统</a></li><li class="chapter-item "><a href="3rd/pybind11/07.函数.html">函数</a></li><li class="chapter-item "><a href="3rd/pybind11/08.类.html">类</a></li><li class="chapter-item "><a href="3rd/pybind11/09.异常.html">异常</a></li><li class="chapter-item "><a href="3rd/pybind11/10.智能指针.html">智能指针</a></li><li class="chapter-item "><a href="3rd/pybind11/11.类型转换.html">类型转换</a></li><li class="chapter-item "><a href="3rd/pybind11/12.Python的C++接口.html">Python的C++接口</a></li><li class="chapter-item "><a href="3rd/pybind11/13.内嵌解释器.html">内嵌解释器</a></li><li class="chapter-item "><a href="3rd/pybind11/14.杂项.html">杂项</a></li><li class="chapter-item "><a href="3rd/pybind11/15.FAQ.html">FAQ</a></li><li class="chapter-item "><a href="3rd/pybind11/16.案例.html">案例</a></li><li class="chapter-item "><a href="3rd/pybind11/pybind11_demo.html">pybind11 demo</a></li></ol></li><li class="chapter-item "><a href="basic/markdown.html">markdown</a></li><li class="chapter-item "><a href="basic/mermaid.html">mermaid</a></li><li class="chapter-item "><a href="test/chapter_2.html">Test</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
