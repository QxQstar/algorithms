# 解释一下 css 的盒模型

css 盒模型包含 margin、padding、border、width、height。

有两种 css 盒模型：标准盒模型和 IE 盒模型。这两种盒模型的差别是宽度盒高度的计算规则不一样。在标准盒模型中盒模型的宽度等于内容的宽度，在 IE 盒模型中宽度等于内容的宽度+padding-left+padding-right+border-left+border-right

将元素的 box-sizing 设置为 content-box 可以将盒模型设置为标准盒模型。将元素的 box-sizing 设置为 border-box 可以将盒模型设置为 IE 盒模型

js 有 4 种方式可以计算盒模型的宽高

1. dom.style.width/height (只能计算内嵌样式设置的宽高)
2. dom.currentStyle.width/height (IE 支持)
3. window.getComputedStyle(dom).width/height
4. dom.getBoundingClientRect().width/height

盒模型边距重叠

边距重叠的解决方案：BFC

# BFC

BFC 的基本概念：块级格式化上下文

BFC 的原理

1. 在 BFC 这个元素的垂直方向的外边距不会发生重叠
2. BFC 的区域不会与浮动元素的的 box 重叠，可以利用这一点来清除浮动
3. BFC 在页面上是一个独立的容器，外面的元素不会影响到 BFC 里面的元素，里面的元素也不会影响到外面的元素
4. 计算 BFC 高度的时候浮动元素也会参与计算

怎么样创建 BFC

1. float 不为 none
2. position 不为 static 和 relation
3. display 的 table 、table-cell、table-row
4. overflow:hidden
