(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{283:function(s,e,t){"use strict";t.r(e);var a=t(28),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"bug分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug分支"}},[s._v("#")]),s._v(" Bug分支")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("软件开发中，bug就像家常便饭一样。有了bug就需要修复，在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。")]),s._v(" "),t("p",[s._v("当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支"),t("code",[s._v("issue-101")]),s._v("来修复它，但是，等等，当前正在"),t("code",[s._v("dev")]),s._v("上进行的工作还没有提交：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch dev\nChanges to be committed:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git reset HEAD <file>..."')]),s._v(" to unstage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tnew file:   hello.py\n\nChanges not staged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout -- <file>..."')]),s._v(" to discard changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tmodified:   readme.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？")]),s._v(" "),t("p",[s._v("幸好，Git还提供了一个"),t("code",[s._v("stash")]),s._v("功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git stash\nSaved working directory and index state WIP on dev: f52c633 add merge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("现在，用"),t("code",[s._v("git status")]),s._v("查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。")]),s._v(" "),t("p",[s._v("首先确定要在哪个分支上修复bug，假定需要在"),t("code",[s._v("master")]),s._v("分支上修复，就从"),t("code",[s._v("master")]),s._v("创建临时分支：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git checkout master\nSwitched to branch 'master'\nYour branch is ahead of 'origin/master' by 6 commits.\n  (use \"git push\" to publish your local commits)\n\n$ git checkout -b issue-101\nSwitched to a new branch 'issue-101'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("现在修复bug，需要把“Git is free software ...”改为“Git is a free software ...”，然后提交：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ git add readme.txt \n$ git commit -m "fix bug 101"\n[issue-101 4c805e2] fix bug 101\n 1 file changed, 1 insertion(+), 1 deletion(-)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("修复完成后，切换到"),t("code",[s._v("master")]),s._v("分支，并完成合并，最后删除"),t("code",[s._v("issue-101")]),s._v("分支：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git switch master\nSwitched to branch 'master'\nYour branch is ahead of 'origin/master' by 6 commits.\n  (use \"git push\" to publish your local commits)\n\n$ git merge --no-ff -m \"merged bug fix 101\" issue-101\nMerge made by the 'recursive' strategy.\n readme.txt | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("太棒了，原计划两个小时的bug修复只花了5分钟！现在，是时候接着回到"),t("code",[s._v("dev")]),s._v("分支干活了！")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git switch dev\nSwitched to branch 'dev'\n\n$ git status\nOn branch dev\nnothing to commit, working tree clean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("工作区是干净的，刚才的工作现场存到哪去了？用"),t("code",[s._v("git stash list")]),s._v("命令看看：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git stash list\nstash@{0}: WIP on dev: f52c633 add merge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：")]),s._v(" "),t("p",[s._v("一是用"),t("code",[s._v("git stash apply")]),s._v("恢复，但是恢复后，stash内容并不删除，你需要用"),t("code",[s._v("git stash drop")]),s._v("来删除；")]),s._v(" "),t("p",[s._v("另一种方式是用"),t("code",[s._v("git stash pop")]),s._v("，恢复的同时把stash内容也删了：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ git stash pop\nOn branch dev\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n\tnew file:   hello.py\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n\tmodified:   readme.txt\n\nDropped refs/stash@{0} (5d677e2ee266f39ea296182fb2354265b91b3b2a)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("再用"),t("code",[s._v("git stash list")]),s._v("查看，就看不到任何stash内容了：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git stash list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你可以多次stash，恢复的时候，先用"),t("code",[s._v("git stash list")]),s._v("查看，然后恢复指定的stash，用命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git stash apply stash@{0}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在master分支上修复了bug后，我们要想一想，dev分支是早期从master分支分出来的，所以，这个bug其实在当前dev分支上也存在。")]),s._v(" "),t("p",[s._v("那怎么在dev分支上修复同样的bug？重复操作一次，提交不就行了？")]),s._v(" "),t("p",[s._v("有木有更简单的方法？")]),s._v(" "),t("p",[s._v("有！")]),s._v(" "),t("p",[s._v("同样的bug，要在dev上修复，我们只需要把"),t("code",[s._v("4c805e2 fix bug 101")]),s._v("这个提交所做的修改“复制”到dev分支。注意：我们只想复制"),t("code",[s._v("4c805e2 fix bug 101")]),s._v("这个提交所做的修改，并不是把整个master分支merge过来。")]),s._v(" "),t("p",[s._v("为了方便操作，Git专门提供了一个"),t("code",[s._v("cherry-pick")]),s._v("命令，让我们能复制一个特定的提交到当前分支：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git branch\n* dev\n  master\n$ git cherry-pick 4c805e2\n[master 1d4b803] fix bug 101\n 1 file changed, 1 insertion(+), 1 deletion(-)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("Git自动给dev分支做了一次提交，注意这次提交的commit是"),t("code",[s._v("1d4b803")]),s._v("，它并不同于master的"),t("code",[s._v("4c805e2")]),s._v("，因为这两个commit只是改动相同，但确实是两个不同的commit。用"),t("code",[s._v("git cherry-pick")]),s._v("，我们就不需要在dev分支上手动再把修bug的过程重复一遍。")]),s._v(" "),t("p",[s._v("有些聪明的童鞋会想了，既然可以在master分支上修复bug后，在dev分支上可以“重放”这个修复过程，那么直接在dev分支上修复bug，然后在master分支上“重放”行不行？当然可以，不过你仍然需要"),t("code",[s._v("git stash")]),s._v("命令保存现场，才能从dev分支切换到master分支。")]),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；")]),s._v(" "),t("p",[s._v("当手头工作没有完成时，先把工作现场"),t("code",[s._v("git stash")]),s._v("一下，然后去修复bug，修复后，再"),t("code",[s._v("git stash pop")]),s._v("，回到工作现场；")]),s._v(" "),t("p",[s._v("在master分支上修复的bug，想要合并到当前dev分支，可以用"),t("code",[s._v("git cherry-pick")]),s._v("命令，把bug提交的修改“复制”到当前分支，避免重复劳动。")])])}),[],!1,null,null,null);e.default=n.exports}}]);