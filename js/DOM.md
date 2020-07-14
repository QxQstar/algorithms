# DOM 时间

## dom 事件不同级别绑定事件的方式

* DOM0

element.onclick = function(event){}

* DOM2

element.addEventListener('click',function(event){},false)

element.addEventListener 的第三个参数表示是在冒泡阶段还是在捕获阶段处理事件。为 true 表示在捕获阶段处理事件，为 false 表示在冒泡阶段处理事件，默认为 false

* DOM3

element.addEventListener('keyup',function(event){},false)

DOM3 级别和 DOM2 级别的差异是：DOM3 级别有更多的事件

## DOM 事件模型

有两种 DOM 事件模型：1. IE 使用的事件冒泡，2. DOM 标准定义的事件冒泡 + 事件捕获

## DOM 事件流

DOM 事件流分为三个阶段：事件捕获阶段，目标阶段，事件冒泡阶段

## 标准 DOM 事件的流程

从 window 对象往下传递事件，一直到目标元素，这个阶段称为事件捕获阶段。再从目标元素往上传递，一直到 window 对象，这个阶段称为事件冒泡

## event 的常见应用

event.preventDefault(): 阻止默认行为，例如 a 标签的调整行为

event.stopPropagation(): 阻止事件的冒泡和捕获

event.stopImmediatePropagation(): 除了阻止事件的冒泡和捕获之外，还会阻止当前节点同类事件处理程序的执行

event.target: 触发事件的目标元素

event.currentTarget: 事件的绑定节点

## 自定义事件

使用 new Event(eventType,Object) 和 new CustomEvent(eventType,Object) 可以自定义事件。例子如下：

```js
const myEvent = new Event('test')

element.addEventListener('test',function(event) {
  
},false)

element.dispatchEvent(myEvent)
``` 

通过 new Event 和 new CustomEvent 创建的事件都可以在第二个参数中指定是否可以冒泡和事件是否可以取消，但是 new CustomEvent 可以传递事件的参数，但是 new Event 不能传递事件的参数

