(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{584:function(s,t,a){s.exports=a.p+"assets/img/jdk6_intern.a5845c2f.png"},585:function(s,t,a){s.exports=a.p+"assets/img/jdk7_intern.190cd5c0.png"},586:function(s,t,a){s.exports=a.p+"assets/img/String_addition_bytecode.24febca4.png"},587:function(s,t,a){s.exports=a.p+"assets/img/String_addition_bytecode_2.f1490ba9.png"},588:function(s,t,a){s.exports=a.p+"assets/img/String_immutable.6ebe79f8.png"},589:function(s,t,a){s.exports=a.p+"assets/img/StringBuffer&StringBuilder_3.973bd750.png"},590:function(s,t,a){s.exports=a.p+"assets/img/String_inheritance_structure.d9a3197a.png"},591:function(s,t,a){s.exports=a.p+"assets/img/StringBuffer&StringBuilder.5be5a040.png"},592:function(s,t,a){s.exports=a.p+"assets/img/StringBuffer&StringBuilder_2.2c2127f3.png"},640:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-string常用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-string常用方法"}},[s._v("#")]),s._v(" 1. String常用方法")]),s._v(" "),n("blockquote",[n("ul",[n("li",[n("a",{attrs:{href:"https://wiki.lifeisgg.online/archives/Java-%E6%96%B9%E6%B3%95%E6%B1%87%E6%80%BB/#toc_28",target:"_blank",rel:"noopener noreferrer"}},[s._v("String常用方法"),n("OutboundLink")],1)])])]),s._v(" "),n("h2",{attrs:{id:"_2-两种方式创建的底层原理和字符串常量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-两种方式创建的底层原理和字符串常量"}},[s._v("#")]),s._v(" 2. 两种方式创建的底层原理和字符串常量")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("第一种是通过**“字面量”**赋值")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("第二种是通过"),n("strong",[s._v("new关键字创建新对象")]),s._v("，在内存中用构造器创建新对象形式")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"_2-1-案例一-通过字面量来创建string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-案例一-通过字面量来创建string"}},[s._v("#")]),s._v(" 2.1 案例一：通过字面量来创建String")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// True")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// True")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v('采用字面值的方式创建一个字符串时，JVM首先会去字符串池中查找是否存在"abc"这个对象，此时有两种情况')]),s._v(" "),n("ul",[n("li",[s._v('如果不存在，则在字符串常量池中创建"abc"这个对象，然后将池中"abc"这个对象的引用地址返回给"abc"对象的引用s1，这样s1会指向字符串常量池中"abc"这个字符串对象；')]),s._v(" "),n("li",[s._v('如果存在，则不创建任何对象，直接将池中"abc"这个对象的地址返回，赋给引用s2。因为s1、s2都是指向同一个字符串池中的"abc"对象，所以结果为true。')])]),s._v(" "),n("p",[s._v('当相同的字符串被创建多次，内存中只保存一份字符串常量值，这就是字符串的"驻留"')]),s._v(" "),n("h3",{attrs:{id:"_2-2-案例二-通过new对象形式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-案例二-通过new对象形式"}},[s._v("#")]),s._v(" 2.2 案例二：通过new对象形式")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xyz"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xyz"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// False")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// True")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v('采用new关键字新建一个字符串对象时，JVM首先在字符串池中查找有没有"xyz"这个字符串对象，')]),s._v(" "),n("ul",[n("li",[s._v('如果有：则不在池中再去创建"xyz"这个对象了，直接在堆中创建一个"xyz"字符串对象，然后将堆中的这个"xyz"对象的地址返回赋给引用s3，这样，s3就指向了堆中创建的这个"xyz"字符串对象；')]),s._v(" "),n("li",[s._v('如果没有：则首先在字符串池中创建一个"xyz"字符串对象，然后再在堆中创建一个"xyz"字符串对象，然后将堆中这个"xyz"字符串对象的地址返回赋给s3引用，这样，s3指向了堆中创建的这个"xyz"字符串对象。s4则指向了堆中创建的另一个"xyz"字符串对象。s3 、s4是两个指向不同对象的引用，结果当然是false。')])]),s._v(" "),n("h3",{attrs:{id:"_2-3-案例三-创建了多少对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-案例三-创建了多少对象"}},[s._v("#")]),s._v(" 2.3 案例三：创建了多少对象")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“xyz”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("产生几个对象？一个或两个，如果常量池中原来没有 ”xyz”, 就是两个。")]),s._v(" "),n("ul",[n("li",[s._v("常量池中没有 "),n("code",[s._v("”xyz”")]),s._v("：就先去字符串常量池创建，然后再去堆中创建实例，所以会创建两个对象")]),s._v(" "),n("li",[s._v("常量池中有 "),n("code",[s._v("”xyz”")]),s._v("：就直接去堆中创建实例，所以会创建一个对象")])]),s._v(" "),n("h2",{attrs:{id:"_3-intern的实现原理-jdk1-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-intern的实现原理-jdk1-8"}},[s._v("#")]),s._v(" 3. intern的实现原理（JDK1.8）")]),s._v(" "),n("p",[s._v("参考")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html")])])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("native")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("intern")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_3-1-jdk6的intern"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-jdk6的intern"}},[s._v("#")]),s._v(" 3.1 JDK6的intern()")]),s._v(" "),n("p",[n("img",{attrs:{src:a(584),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"_3-2-jdk7的intern"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-jdk7的intern"}},[s._v("#")]),s._v(" 3.2 JDK7的intern()")]),s._v(" "),n("p",[n("img",{attrs:{src:a(585),alt:""}})]),s._v(" "),n("p",[s._v("这个方法是一个 "),n("code",[s._v("native")]),s._v(" 的方法，但注释写的非常明了。当调用 intern方法时：")]),s._v(" "),n("ul",[n("li",[s._v("如果字符串常量池已经包含一个等于此String对象的字符串（值比较用equals(oject)方法确定），则返回池中的字符串对象的地址。")]),s._v(" "),n("li",[s._v("如果不包含，将此String对象添加到字符串常量池中为新的String对象，并返回字符串常量池中此新的String对象的引用")])]),s._v(" "),n("p",[s._v("JDK 1.7后，intern方法还是会先去查询常量池中是否有已经存在，如果存在，则返回常量池中的引用，这一点与之前没有区别，区别在于，"),n("strong",[s._v("如果在常量池找不到对应的字符串，则不会再将字符串拷贝到常量池，而只是在常量池中生成一个对原字符串的引用简单的说，就是往常量池放的东西变了：原来在常量池中找不到时，复制一个副本放到常量池，1.7后则是将在堆上的地址引用复制到常量池。")])]),s._v(" "),n("h3",{attrs:{id:"_3-3-举例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-举例"}},[s._v("#")]),s._v(" 3.3 举例")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//创建了"str"和"01"常量，但是没有创建"str01"常量')]),s._v("\nstr2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("intern")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str01"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("str1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("ol",[n("li",[s._v('第一行：字符串常量池中生成"str"和"01"，在堆中创建两个String对象，相加后返回在堆为"str01"的新的String对象的引用，'),n("strong",[s._v('此时常量池没有"str01"对象，只有"str"和"01"')])]),s._v(" "),n("li",[s._v('第二行：调用intern()后，由于字符串常量池中不存在"str01"，所以复制str2地址引用到字符串常量池(1.7后的改动)')]),s._v(" "),n("li",[s._v('第三行：由于字符串常量池中已存在"str01"，所以str1指向已存在的，即st2所指向的对象')]),s._v(" "),n("li",[s._v("第四行：两个指向同一个对象所以结果为true")])])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str01"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstr2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("intern")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("str1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("ol",[n("li",[s._v('第一行：字符串常量池中生成"str"和"01"，在堆中创建两个String对象，相加后返回值为"str01"的新的String对象')]),s._v(" "),n("li",[s._v('第二行：由于字符串常量池不存在"str01"，所以此时在字符串常量池中创建新的对象')]),s._v(" "),n("li",[s._v('第三行：由于已经存在"str01"，所以不会把str2地址引用到字符串常量池，而是返回已经存在的"str01"对象的地址')]),s._v(" "),n("li",[s._v("第四行：由于str1指向字符串常量池对象，str2指向堆中的对象，所以返回false")])])]),s._v(" "),n("h2",{attrs:{id:"_4-字符串相加原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-字符串相加原理"}},[s._v("#")]),s._v(" 4. 字符串相加原理")]),s._v(" "),n("p",[s._v("参考")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("https://blog.csdn.net/u010775025/article/details/86507090")])])]),s._v(" "),n("h3",{attrs:{id:"_4-1-三种情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-三种情况"}},[s._v("#")]),s._v(" 4.1 三种情况")]),s._v(" "),n("ul",[n("li",[s._v("两个或者两个以上的字符串常量相加，在预编译的时候“+”会被优化，相当于把字符串常量自动合成一个字符串常量")]),s._v(" "),n("li",[s._v("字符串对象的+操作其本质是new了StringBuilder对象进行append操作，拼接后调用toString()返回String对象")]),s._v(" "),n("li",[n("code",[s._v("final")]),s._v("修饰的String在相加的时候等同于"),n("code",[s._v("字符串常量")]),s._v("直接相加，在编译后会直接替换成对应的值")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Programming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Programming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Program"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s5 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Program"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s6 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" s4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s7 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ming"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s6"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s7"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("**常量相加：**全都是常量相加时，会在字符串常量池创建新对象，不会在堆中创建新的对象")]),s._v(" "),n("p",[n("img",{attrs:{src:a(586),alt:"String相加字节码"}})]),s._v(" "),n("p",[s._v('第20~22行，我们通过对比知道，String s5 = "Program" + "ming";在被编译器优化成了String s5 = "Programming";')]),s._v(" "),n("p",[s._v("也可以得出字符串常量相加，不会用到"),n("code",[s._v("StringBuilder")]),s._v("对象，有一点要注意的是：字符串常量和字符串是不同的概念，字符串常量储存于方法区，而字符串储存于堆(heap)。")])]),s._v(" "),n("li",[n("p",[s._v("包含String对象的相加：操作其本质是new了StringBuilder对象进行append操作，拼接后调用toString()返回新的String对象")]),s._v(" "),n("p",[n("img",{attrs:{src:a(587),alt:"String相加字节码"}})]),s._v(" "),n("blockquote",[n("ol",[n("li",[s._v("第24行：使用new 了 StringBuider对象")]),s._v(" "),n("li",[s._v("第25行：进行StringBuider对象初始化")]),s._v(" "),n("li",[s._v("第26行：使用append() 方法拼接s3的内容")]),s._v(" "),n("li",[s._v("第27行：再使用append() 方法拼接s4的内容")]),s._v(" "),n("li",[s._v("第28行：最后调用toString() 返回String对象")])])])])]),s._v(" "),n("h3",{attrs:{id:"_4-2-特殊情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-特殊情况"}},[s._v("#")]),s._v(" 4.2 特殊情况")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ja"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"va"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("intern")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("常理认为，在执行"),n("code",[s._v("s2.intern()")]),s._v("时，由于字符串常量池中不存在，所以会复制引用s2到字符串常量池中去，最后对比指向同一个对象地址为"),n("code",[s._v("true")]),s._v("，但事实上"),n("code",[s._v('"java"')]),s._v("这个字符串在执行此语句之前，字符串常量池中已经存在此字符串")]),s._v(" "),n("h2",{attrs:{id:"_5-stringbuffer-和-stringbuilder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-stringbuffer-和-stringbuilder"}},[s._v("#")]),s._v(" 5. StringBuffer 和 StringBuilder")]),s._v(" "),n("blockquote",[n("p",[s._v("String StringBuffer 和 StringBuilder 的区别是什么? String 为什么是不可变的?")])]),s._v(" "),n("h3",{attrs:{id:"_5-1-java-string-类-string字符串常量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-java-string-类-string字符串常量"}},[s._v("#")]),s._v(" 5.1 Java String 类：String字符串常量")]),s._v(" "),n("p",[s._v("需要注意的是，String的值是不可变的，这就导致每次对String的操作都会生成"),n("strong",[s._v("新的String对象")]),s._v("，这样不仅效率低下，而且大量浪费有限的内存空间。我们来看一下这张对String操作时内存变化的图：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(588),alt:"String不可变"}})]),s._v(" "),n("p",[s._v("我们可以看到，初始String值为“hello”，然后在这个字符串后面加上新的字符串“world”，这个过程是需要重新在栈堆内存中开辟内存空间的，最终得到了“hello world”字符串也相应的需要开辟内存空间，"),n("strong",[s._v("这样短短的两个字符串，却需要开辟三次内存空间")]),s._v("，不得不说这是对内存空间的"),n("strong",[s._v("极大浪费")]),s._v("。为了应对经常性的字符串相关的操作，就需要使用Java提供的其他两个操作字符串的类——StringBuffer类和StringBuild类来对此种变化字符串进行处理。")]),s._v(" "),n("h3",{attrs:{id:"_5-2-stringbuffer-和-stringbuilder-类-stringbuffer、stringbuilder字符串变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-stringbuffer-和-stringbuilder-类-stringbuffer、stringbuilder字符串变量"}},[s._v("#")]),s._v(" 5.2 StringBuffer 和 StringBuilder 类——StringBuffer、StringBuilder字符串变量")]),s._v(" "),n("p",[n("img",{attrs:{src:a(589),alt:""}})]),s._v(" "),n("p",[s._v("当对字符串进行修改的时候，需要使用 "),n("strong",[s._v("StringBuffer(线程安全)")]),s._v(" 和 "),n("strong",[s._v("StringBuilder(线程不安全)")]),s._v(" 类。")]),s._v(" "),n("p",[s._v("和 String 类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。")]),s._v(" "),n("p",[s._v("StringBuilder 类在 Java 5 中被提出，它和 StringBuffer 之间的最大不同在于 "),n("strong",[s._v("StringBuilder 的方法不是线程安全的（不能同步访问）")]),s._v("。")]),s._v(" "),n("p",[s._v("由于 StringBuilder 相较于 StringBuffer 有速度优势，所以多数情况下建议使用 StringBuilder 类。然而在应用程序要求线程安全的情况下，则必须使用 StringBuffer 类。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(590),alt:"String继承结构"}})]),s._v(" "),n("h3",{attrs:{id:"_5-3-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-区别"}},[s._v("#")]),s._v(" 5.3 区别")]),s._v(" "),n("ul",[n("li",[s._v("**String：**不可变字符串；")]),s._v(" "),n("li",[s._v("**StringBuffer：**可变字符串、效率低、线程安全；")]),s._v(" "),n("li",[s._v("**StringBuilder：**可变字符序列、效率高、线程不安全；")])]),s._v(" "),n("p",[s._v("初始化上的区别，String可以空赋值，后者不行，报错")]),s._v(" "),n("p",[n("img",{attrs:{src:a(591),alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(592),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);