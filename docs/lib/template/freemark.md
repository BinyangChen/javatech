# Freemark Cheat Sheet

> FreeMarker 是一款模板引擎： 即一种基于模板和要改变的数据， 并用来生成输出文本(HTML 网页，电子邮件，配置文件，源代码等)的通用工具。 它不是面向最终用户的，而是一个 Java 类库，是一款程序员可以嵌入他们所开发产品的组件。

## Freemark 简介

Freemark 模板编写为 FreeMarker Template Language (FTL)。它是简单的，专用的语言， _不是_ 像 PHP 那样成熟的编程语言。在模板中，你可以专注于如何展现数据， 而在模板之外可以专注于要展示什么数据。

![img](http://freemarker.foofun.cn/figures/overview.png)

这种方式通常被称为 [MVC (模型 视图 控制器) 模式](http://freemarker.foofun.cn/gloss.html#gloss.MVC)，对于动态网页来说，是一种特别流行的模式。 它帮助从开发人员(Java 程序员)中分离出网页设计师(HTML 设计师)。设计师无需面对模板中的复杂逻辑， 在没有程序员来修改或重新编译代码时，也可以修改页面的样式。

Freemark 模板一句话概括就是：***`模板 + 数据模型 = 输出`***

## 数据类型

Freemark 支持的类型有：

### 标量

字符串

```
${"Hello ${user}"}
${"I can escape with \\ ${user}"}
${r"Now I can read dollar signs $"}
```

输出：

```
Hello deister
I can escape with \ deister
Now I can read dollar signs $
```

数字

布尔值

日期/时间 (日期，时间或日期时间)

### 容器

- 哈希表
- 序列
- 集合

### 子程序

- [方法和函数](http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_method)
- [用户自定义指令](http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_userdefdir)

### 其它

- [结点](http://freemarker.foofun.cn/dgui_datamodel_types.html#dgui_datamodel_node)

## 模板

#### 总体结构

模板(FTL 编程)是由如下部分混合而成的：

- **文本**：文本会照着原样来输出。
- **插值**：这部分的输出会被计算的值来替换。插值由 `${` and `}` 所分隔。
- **FTL 标签**：FTL 标签和 HTML 标签很相似，但是它们却是给 FreeMarker 的指示， 而且不会打印在输出内容中。
- **注释**：注释和 HTML 的注释也很相似，但它们是由 `<#--` 和 `-->`来分隔的。注释会被 FreeMarker 直接忽略， 更不会在输出内容中显示。

![img](http://dunwu.test.upcdn.net/snap/ftl-template.png)

> 🔔 注意：
>
> - FTL 是区分大小写的。
> - `插值` 仅仅可以在 `文本` 中使用。
> - `FTL 标签` 不可以在其他 `FTL 标签` 和 `插值` 中使用。
> - `注释` 可以放在 `FTL 标签` 和 `插值` 中。

#### 指令

使用 FTL 标签来调用 **指令**。

FTL 标签分为两种：

- 开始标签： `<#directivename parameters>`
- 结束标签： `</#directivename>`

除了标签以 `#` 开头外，其他都和 HTML，XML 的语法很相似。 如果标签没有嵌套内容(在开始标签和结束标签之间的内容)，那么可以只使用开始标签。 例如 `<#if *something*>*...*</#if>`， 而 FreeMarker 知道 `<#include *something*>` 中的 `include` 指令没有可嵌套的内容。

`*parameters*` 的格式由 `*directivename*`来决定。

事实上，指令有两种类型： [预定义指令](http://freemarker.foofun.cn/gloss.html#gloss.predefinedDirective) 和 [用户自定义指令](http://freemarker.foofun.cn/gloss.html#gloss.userDefinedDirective)。 对于用户自定义的指令使用 `@` 来代替 `#`。

> 🔔 注意：
>
> - FreeMarker 仅仅关心 FTL 标签的嵌套而不关心 HTML 标签的嵌套。 它只会把 HTML 看做是文本，不会来解释 HTML。
> - 如果你尝试使用一个不存在的指令(比如，输错了指令的名称)， FreeMarker 就会拒绝执行模板，同时抛出错误信息。
> - FreeMarker 会忽略 FTL 标签中多余的 [空白标记](http://freemarker.foofun.cn/gloss.html#gloss.whiteSpace)。

#### 表达式

以下为快速浏览清单，如果需要了解更多细节，请参考[**这里**](http://freemarker.foofun.cn/dgui_template_exp.html)。

- [直接指定值](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct)
  - [字符串](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_string)： `"Foo"` 或者 `'Foo'` 或者 `"It's \"quoted\""` 或者 `'It\'s "quoted"'` 或者 `r"C:\raw\string"`
  - [数字](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_number)： `123.45`
  - [布尔值](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_boolean)： `true`， `false`
  - [序列](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_seuqence)： `["foo", "bar", 123.45]`； 值域： `0..9`, `0..<10` (或 `0..!10`), `0..`
  - [哈希表](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_hash)： `{"name":"green mouse", "price":150}`
- [检索变量](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var)
  - [顶层变量](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_toplevel)： `user`
  - [从哈希表中检索数据](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_hash)： `user.name`， `user["name"]`
  - [从序列中检索数据](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_sequence)： `products[5]`
  - [特殊变量](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_var_special)： `.main`
- [字符串操作](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop)
  - [插值(或连接)](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop_interpolation)： `"Hello ${user}!"` (或 `"Hello " + user + "!"`)
  - [获取一个字符](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_get_character)： `name[0]`
  - [字符串切分：](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop_slice) 包含结尾： `name[0..4]`，不包含结尾： `name[0..<5]`，基于长度(宽容处理)： `name[0..*5]`，去除开头：`name[5..]`
- [序列操作](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_sequenceop)
  - [连接](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_sequenceop_cat)： `users + ["guest"]`
  - [序列切分](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_seqenceop_slice)：包含结尾： `products[20..29]`， 不包含结尾： `products[20..<30]`，基于长度(宽容处理)：`products[20..*10]`，去除开头： `products[20..]`
- [哈希表操作](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_hashop)
  - [连接](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_hashop_cat)： `passwords + { "joe": "secret42" }`
- [算术运算](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_arit)： `(x * 1.5 + 10) / 2 - y % 100`
- [比较运算](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_comparison)： `x == y`， `x != y`， `x < y`， `x > y`， `x >= y`， `x <= y`， `x lt y`， `x lte y`， `x gt y`， `x gte y`， 等等。。。。。。
- [逻辑操作](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_logicalop)： `!registered && (firstVisit || fromEurope)`
- [内建函数](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_builtin)： `name?upper_case`, `path?ensure_starts_with('/')`
- [方法调用](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_methodcall)： `repeat("What", 3)`
- [处理不存在的值](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing)
  - [默认值](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing_default)： `name!"unknown"` 或者 `(user.name)!"unknown"` 或者 `name!` 或者 `(user.name)!`
  - [检测不存在的值](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing_test)： `name??` 或者 `(user.name)??`
- [赋值操作](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_assignment)： `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `++`, `--`

#### 插值

插值的使用格式是： `${*expression*}`，这里的 `*expression*` 可以是所有种类的表达式(比如 `${100 + x}`)。

插值是用来给 `*表达式*` 插入具体值然后转换为文本(字符串)。插值仅仅可以在两种位置使用：在 [文本 区](http://freemarker.foofun.cn/dgui_template_overallstructure.html) (比如 `<h1>Hello ${name}!</h1>`) 和 [字符串表达式](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_stringop_interpolation) (比如 `<#include "/footer/${company}.html">`)中。

表达式的结果必须是字符串，数字或者日期/时间/日期-时间值， 因为(默认是这样)仅仅这些值可以被插值自动转换为字符串。其它类型的值 (比如布尔值，序列)必须 "手动地" 转换成字符串(后续会有一些建议)， 否则就会发生错误，中止模板执行。

注意：插值 _仅仅_ 在 [文本区](http://freemarker.foofun.cn/dgui_template_overallstructure.html) (比如 `<h1>Hello ${name}!</h1>`) 和 [字符串](http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_direct_string) 中起作用。

⭕ `<#include "/footer/${company}.html">`

⭕ `<#if big>...</#if>`

❌ `<#if ${big}>...</#if>`

❌ `<#if "${big}">...</#if>`

## 参考资料

- [Freemark Github](https://github.com/apache/freemarker)
- [Freemark 中文教程](http://freemarker.foofun.cn/)
- [在线 Freemark 工具](https://try.freemarker.apache.org/)
