(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{282:function(e,a,s){"use strict";s.r(a);var n=s(28),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h4",{attrs:{id:"feature分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feature分支"}},[e._v("#")]),e._v(" Feature分支")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("软件开发中，总有无穷无尽的新的功能要不断添加进来。")]),e._v(" "),s("p",[e._v("添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。")]),e._v(" "),s("p",[e._v("现在，你终于接到了一个新任务：开发代号为Vulcan的新功能，该功能计划用于下一代星际飞船。")]),e._v(" "),s("p",[e._v("于是准备开发：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git switch -c feature-vulcan\nSwitched to a new branch 'feature-vulcan'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("5分钟后，开发完毕：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$ git add vulcan.py\n\n$ git status\nOn branch feature-vulcan\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n\tnew file:   vulcan.py\n\n$ git commit -m "add feature vulcan"\n[feature-vulcan 287773e] add feature vulcan\n 1 file changed, 2 insertions(+)\n create mode 100644 vulcan.py\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("切回"),s("code",[e._v("dev")]),e._v("，准备合并：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git switch dev\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("一切顺利的话，feature分支和bug分支是类似的，合并，然后删除。")]),e._v(" "),s("p",[e._v("但是！")]),e._v(" "),s("p",[e._v("就在此时，接到上级命令，因经费不足，新功能必须取消！")]),e._v(" "),s("p",[e._v("虽然白干了，但是这个包含机密资料的分支还是必须就地销毁：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git branch -d feature-vulcan\nerror: The branch 'feature-vulcan' is not fully merged.\nIf you are sure you want to delete it, run 'git branch -D feature-vulcan'.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("销毁失败。Git友情提醒，"),s("code",[e._v("feature-vulcan")]),e._v("分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用大写的"),s("code",[e._v("-D")]),e._v("参数。。")]),e._v(" "),s("p",[e._v("现在我们强行删除：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git branch -D feature-vulcan\nDeleted branch feature-vulcan (was 287773e).\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("终于删除成功！")]),e._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),s("p",[e._v("开发一个新feature，最好新建一个分支；")]),e._v(" "),s("p",[e._v("如果要丢弃一个没有被合并过的分支，可以通过"),s("code",[e._v("git branch -D")]),e._v("强行删除。")])])}),[],!1,null,null,null);a.default=t.exports}}]);