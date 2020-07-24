# 前端监控

前端有两种类型的错误，一种是 js 运行时的错误，另一种是资源加载错误。

## 捕获 js 运行时的错误

1. try{}catch(){}
2. window.onerror
3. window.onunhandledrejection

## 捕获资源加载错误

1. element.onerror
2. 捕获 Error 事件对象

注：使用 window.onerror 捕获不到资源加载错误。 要使用 window.addEventListener('error',handler,true) 在捕获阶段处理事件

要得到跨域资源中的详细错误信息，需要做如下两个步骤:

1. 在 script 标签上设置 crossorigin 属性
2. 在服务端设置 Access-Control-Allow-Origin

## 错误上报

1. image
2. ajax
3. Beacon
