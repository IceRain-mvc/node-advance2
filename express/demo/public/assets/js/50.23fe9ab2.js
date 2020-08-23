(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{249:function(t,i,e){"use strict";e.r(i);var a=e(28),s=Object(a.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h4",{attrs:{id:"git简介与安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git简介与安装"}},[t._v("#")]),t._v(" git简介与安装")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("最早Git是在Linux上开发的，很长一段时间内，Git也只能在Linux和Unix系统上跑。不过，慢慢地有人把它移植到了Windows上。现在，Git可以在Linux、Unix、Mac和Windows这几大平台上正常运行了。")]),t._v(" "),e("p",[t._v("要使用Git，第一步当然是安装Git了。根据你当前使用的平台来阅读下面的文字：")]),t._v(" "),e("h3",{attrs:{id:"在linux上安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在linux上安装git"}},[t._v("#")]),t._v(" 在Linux上安装Git")]),t._v(" "),e("p",[t._v("首先，你可以试着输入"),e("code",[t._v("git")]),t._v("，看看系统有没有安装Git：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git\nThe program 'git' is currently not installed. You can install it by typing:\nsudo apt-get install git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("像上面的命令，有很多Linux会友好地告诉你Git没有安装，还会告诉你如何安装Git。")]),t._v(" "),e("p",[t._v("如果你碰巧用Debian或Ubuntu Linux，通过一条"),e("code",[t._v("sudo apt-get install git")]),t._v("就可以直接完成Git的安装，非常简单。")]),t._v(" "),e("p",[t._v("老一点的Debian或Ubuntu Linux，要把命令改为"),e("code",[t._v("sudo apt-get install git-core")]),t._v("，因为以前有个软件也叫GIT（GNU Interactive Tools），结果Git就只能叫"),e("code",[t._v("git-core")]),t._v("了。由于Git名气实在太大，后来就把GNU Interactive Tools改成"),e("code",[t._v("gnuit")]),t._v("，"),e("code",[t._v("git-core")]),t._v("正式改为"),e("code",[t._v("git")]),t._v("。")]),t._v(" "),e("p",[t._v("如果是其他Linux版本，可以直接通过源码安装。先从Git官网下载源码，然后解压，依次输入："),e("code",[t._v("./config")]),t._v("，"),e("code",[t._v("make")]),t._v("，"),e("code",[t._v("sudo make install")]),t._v("这几个命令安装就好了。")]),t._v(" "),e("h3",{attrs:{id:"在mac-os-x上安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在mac-os-x上安装git"}},[t._v("#")]),t._v(" 在Mac OS X上安装Git")]),t._v(" "),e("p",[t._v("如果你正在使用Mac做开发，有两种安装Git的方法。")]),t._v(" "),e("p",[t._v("一是安装homebrew，然后通过homebrew安装Git，具体方法请参考homebrew的文档：http://brew.sh/。")]),t._v(" "),e("p",[t._v("第二种方法更简单，也是推荐的方法，就是直接从AppStore安装Xcode，Xcode集成了Git，不过默认没有安装，你需要运行Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就可以完成安装了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919018691743136/0",alt:"install-git-by-xcode"}})]),t._v(" "),e("p",[t._v("Xcode是Apple官方IDE，功能非常强大，是开发Mac和iOS App的必选装备，而且是免费的！")]),t._v(" "),e("h3",{attrs:{id:"在windows上安装git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在windows上安装git"}},[t._v("#")]),t._v(" 在Windows上安装Git")]),t._v(" "),e("p",[t._v("在Windows上使用Git，可以从Git官网直接"),e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装程序"),e("OutboundLink")],1),t._v("，然后按默认选项安装即可。")]),t._v(" "),e("p",[t._v("安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.liaoxuefeng.com/files/attachments/919018718363424/0",alt:"install-git-on-windows"}})]),t._v(" "),e("p",[t._v("安装完成后，还需要最后一步设置，在命令行输入：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ git config --global user.name "Your Name"\n$ git config --global user.email "email@example.com"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。你也许会担心，如果有人故意冒充别人怎么办？这个不必担心，首先我们相信大家都是善良无知的群众，其次，真的有冒充的也是有办法可查的。")]),t._v(" "),e("p",[t._v("注意"),e("code",[t._v("git config")]),t._v("命令的"),e("code",[t._v("--global")]),t._v("参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。")]),t._v(" "),e("p",[t._v("Git可以安装在哪些操作系统上？")]),t._v(" "),e("p",[t._v("Linux")]),t._v(" "),e("p",[t._v("macOS")]),t._v(" "),e("p",[t._v("Solaris")]),t._v(" "),e("p",[t._v("Windows")]),t._v(" "),e("p",[t._v("Raspberry Pi")])])}),[],!1,null,null,null);i.default=s.exports}}]);