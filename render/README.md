## DOCTYPE 的作用

声明文档类型

`<!DOCTYPE html>`

## 浏览器渲染机制

浏览器拿到 html 生成 DOM 树，拿到这个页面的 style 生成 CSSOM 树，将 DOM 树和 CSSOM 树合在一起生成 render 树，最后画在界面上

## 重排 (reflow)

当需要重新计算元素的位置时候就会发生重排。节点的增加、删除、修改会发生重排；改变某些 css 样式会发生重排；改变窗口大小可能也会发生重排；

## 重绘 (repaint)

当页面的显示需要发生变化会发生重绘。改变 DOM 节点会发生重绘；改变 css 样式会发生重绘 