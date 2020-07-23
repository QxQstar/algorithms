# 通信类

## 同源策略和限制

浏览器限制一个源的脚本对另一个源的资源进行交互。

只要两个 URL 的协议，主机和端口中有一个不一样就是不同源

## 前后端通信的方式

Ajax、CORS、WebSocket

## 如何创建 Ajax

// todo

## 跨域通信的几种方式

JSONP、WebSocket、CORS、postMessage、hash

### JSONP

JSONP 利用 script 可以异步加载脚本的特性实现跨域通信。创建一个 script 标签，script 标签的 src 属性需要带上一个 callback=函数名，这个函数是一个全局函数，服务器的响应会将响应的数据作为 callback 函数的参数，然后在客户端就能拿到响应数据了

### WebSocket

通过 new WebSocket(url), 创建一个 WebSocket 对象，然后监听这个 WebSocket 对象的事件，实现发送数据和接受数据的功能。

### CORS

CORS 是 W3C 的标准，它需要服务器和浏览器的共同支持，对于前端的开发人员而言，CORS 通信与同源的 AJAX 通信从代码层面上是一样的。CORS 通信的过程由浏览器自动完成，实现 CORS 的关键在服务器。

当浏览器发生请求是跨域请求，会在请求头中添加一些的字段或者发送额外的请求。究竟是添加字段还是发送额外的请求，这取决于是简单请求还是非简单请求。简单请求需要满足如下条件：

1. 请求方法是：GET、POST 或者 HEAD
2. 请求头只要：Accept,Accept-Language,Content-Language,Content-Type
3. Content-Type 只能是：application/x-www-form-urlencoded,multipart/form-data、text/plain

CORS 和 JSONP 的差别是 JSONP 只能发送 GET 请求，COPS 对请求方法没有限制

### postMessage

如果在 A 窗口中通过 iframe 嵌入 B 窗口，如果 A 窗口需要向 B 通信，可以拿到 B 的 window,然后调用 Bwindow.postMessage 方法，还有在 B 项目的 window 对象上监听 message 事件

### hash

使用 hash 进行通信，是利用修改 hash 值页面不会重新加载的特性。在 A 中修改 B 的 hash 值，把需要传递的数据带在 hash 上，B 监听 hash 的变化，在事件处理程序中取得传递的数据

