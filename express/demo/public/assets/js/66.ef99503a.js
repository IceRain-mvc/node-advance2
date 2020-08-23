(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{269:function(s,t,a){"use strict";a.r(t);var e=a(28),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"管理修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理修改"}},[s._v("#")]),s._v(" 管理修改")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("现在，假定你已经完全掌握了暂存区的概念。下面，我们要讨论的就是，为什么Git比其他版本控制系统设计得优秀，因为Git跟踪并管理的是修改，而非文件。")]),s._v(" "),a("p",[s._v("你会问，什么是修改？比如你新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。")]),s._v(" "),a("p",[s._v("为什么说Git管理的是修改，而不是文件呢？我们还是做实验。第一步，对readme.txt做一个修改，比如加一行内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cat readme.txt\nGit is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后，添加：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git add readme.txt\n$ git status\n# On branch master\n# Changes to be committed:\n#   (use "git reset HEAD <file>..." to unstage)\n#\n#       modified:   readme.txt\n#\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然后，再修改readme.txt：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cat readme.txt \nGit is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes of files.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("提交：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git commit -m "git tracks changes"\n[master 519219b] git tracks changes\n 1 file changed, 1 insertion(+)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("提交后，再看看状态：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git status\nOn branch master\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n\tmodified:   readme.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("咦，怎么第二次的修改没有被提交？")]),s._v(" "),a("p",[s._v("别激动，我们回顾一下操作过程：")]),s._v(" "),a("p",[s._v("第一次修改 -> "),a("code",[s._v("git add")]),s._v(" -> 第二次修改 -> "),a("code",[s._v("git commit")])]),s._v(" "),a("p",[s._v("你看，我们前面讲了，Git管理的是修改，当你用"),a("code",[s._v("git add")]),s._v("命令后，在工作区的第一次修改被放入暂存区，准备提交，但是，在工作区的第二次修改并没有放入暂存区，所以，"),a("code",[s._v("git commit")]),s._v("只负责把暂存区的修改提交了，也就是第一次的修改被提交了，第二次的修改不会被提交。")]),s._v(" "),a("p",[s._v("提交后，用"),a("code",[s._v("git diff HEAD -- readme.txt")]),s._v("命令可以查看工作区和版本库里面最新版本的区别：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git diff HEAD -- readme.txt \ndiff --git a/readme.txt b/readme.txt\nindex 76d770f..a9c5755 100644\n--- a/readme.txt\n+++ b/readme.txt\n@@ -1,4 +1,4 @@\n Git is a distributed version control system.\n Git is free software distributed under the GPL.\n Git has a mutable index called stage.\n-Git tracks changes.\n+Git tracks changes of files.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("可见，第二次修改确实没有被提交。")]),s._v(" "),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[s._v("那怎么提交第二次修改呢？你可以继续"),a("code",[s._v("git add")]),s._v("再"),a("code",[s._v("git commit")]),s._v("，也可以别着急提交第一次修改，先"),a("code",[s._v("git add")]),s._v("第二次修改，再"),a("code",[s._v("git commit")]),s._v("，就相当于把两次修改合并后一块提交了：")]),s._v(" "),a("p",[s._v("第一次修改 -> "),a("code",[s._v("git add")]),s._v(" -> 第二次修改 -> "),a("code",[s._v("git add")]),s._v(" -> "),a("code",[s._v("git commit")])]),s._v(" "),a("p",[s._v("好，现在，把第二次修改提交了，然后开始小结。")]),s._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[s._v("现在，你又理解了Git是如何跟踪修改的，每次修改，如果不用"),a("code",[s._v("git add")]),s._v("到暂存区，那就不会加入到"),a("code",[s._v("commit")]),s._v("中。")])])}),[],!1,null,null,null);t.default=n.exports}}]);