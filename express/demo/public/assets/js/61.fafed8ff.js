(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{273:function(t,s,e){"use strict";e.r(s);var a=e(28),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h4",{attrs:{id:"工作区和暂存区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作区和暂存区"}},[t._v("#")]),t._v(" 工作区和暂存区")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念。")]),t._v(" "),e("p",[t._v("先来看名词解释。")]),t._v(" "),e("h4",{attrs:{id:"工作区（working-directory）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作区（working-directory）"}},[t._v("#")]),t._v(" 工作区（Working Directory）")]),t._v(" "),e("p",[t._v("就是你在电脑里能看到的目录，比如我的"),e("code",[t._v("learngit")]),t._v("文件夹就是一个工作区：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919021113952544/0",alt:"working-dir"}})]),t._v(" "),e("h4",{attrs:{id:"版本库（repository）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本库（repository）"}},[t._v("#")]),t._v(" 版本库（Repository）")]),t._v(" "),e("p",[t._v("工作区有一个隐藏目录"),e("code",[t._v(".git")]),t._v("，这个不算工作区，而是Git的版本库。")]),t._v(" "),e("p",[t._v("Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支"),e("code",[t._v("master")]),t._v("，以及指向"),e("code",[t._v("master")]),t._v("的一个指针叫"),e("code",[t._v("HEAD")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919020037470528/0",alt:"git-repo"}})]),t._v(" "),e("p",[t._v("分支和"),e("code",[t._v("HEAD")]),t._v("的概念我们以后再讲。")]),t._v(" "),e("p",[t._v("前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：")]),t._v(" "),e("p",[t._v("第一步是用"),e("code",[t._v("git add")]),t._v("把文件添加进去，实际上就是把文件修改添加到暂存区；")]),t._v(" "),e("p",[t._v("第二步是用"),e("code",[t._v("git commit")]),t._v("提交更改，实际上就是把暂存区的所有内容提交到当前分支。")]),t._v(" "),e("p",[t._v("因为我们创建Git版本库时，Git自动为我们创建了唯一一个"),e("code",[t._v("master")]),t._v("分支，所以，现在，"),e("code",[t._v("git commit")]),t._v("就是往"),e("code",[t._v("master")]),t._v("分支上提交更改。")]),t._v(" "),e("p",[t._v("你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。")]),t._v(" "),e("p",[t._v("俗话说，实践出真知。现在，我们再练习一遍，先对"),e("code",[t._v("readme.txt")]),t._v("做个修改，比如加上一行内容：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Git is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("然后，在工作区新增一个"),e("code",[t._v("LICENSE")]),t._v("文本文件（内容随便写）。")]),t._v(" "),e("p",[t._v("先用"),e("code",[t._v("git status")]),t._v("查看一下状态：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ git status\nOn branch master\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n\tmodified:   readme.txt\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\n\tLICENSE\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("p",[t._v("Git非常清楚地告诉我们，"),e("code",[t._v("readme.txt")]),t._v("被修改了，而"),e("code",[t._v("LICENSE")]),t._v("还从来没有被添加过，所以它的状态是"),e("code",[t._v("Untracked")]),t._v("。")]),t._v(" "),e("p",[t._v("现在，使用两次命令"),e("code",[t._v("git add")]),t._v("，把"),e("code",[t._v("readme.txt")]),t._v("和"),e("code",[t._v("LICENSE")]),t._v("都添加后，用"),e("code",[t._v("git status")]),t._v("再查看一下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ git status\nOn branch master\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n\tnew file:   LICENSE\n\tmodified:   readme.txt\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("现在，暂存区的状态就变成这样了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919020074026336/0",alt:"git-stage"}})]),t._v(" "),e("p",[t._v("所以，"),e("code",[t._v("git add")]),t._v("命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行"),e("code",[t._v("git commit")]),t._v("就可以一次性把暂存区的所有修改提交到分支。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ git commit -m "understand how stage works"\n[master e43a48b] understand how stage works\n 2 files changed, 2 insertions(+)\n create mode 100644 LICENSE\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git status\nOn branch master\nnothing to commit, working tree clean\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("现在版本库变成了这样，暂存区就没有任何内容了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919020100829536/0",alt:"git-stage-after-commit"}})]),t._v(" "),e("h3",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("暂存区是Git非常重要的概念，弄明白了暂存区，就弄明白了Git的很多操作到底干了什么。")]),t._v(" "),e("p",[t._v("没弄明白暂存区是怎么回事的童鞋，请向上滚动页面，再看一次。")])])}),[],!1,null,null,null);s.default=n.exports}}]);