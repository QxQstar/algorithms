# MVVM 框架

## MVVM 的定义

MVVM 这四个字母对应的是：Model、View、ViewModel。MVVM 这种设计思想是从 MVC 演进而来。MVVM 框架它作用于 ViewModel 层。

## 双向绑定的原理

对 MVVM 框架而言双向绑定是核心，Vue 它就是一种 MVVM 框架。双向绑定指的是 View 层改变了，Model 层也要跟着改变，Model 层改变了，View 层也要跟着改变。View 层与 Model 层之间没有之间的联系，View 层和 Model 层通过 ViewModel 层进行交互，Vue 框架作用于 ViewModel 层，View 层与 ViewModel 层之间是双向的，Model 层与 ViewModel 层之间是双向的

在这里先介绍 Model 层变化，ViewModel 层感知到变化，然后 View 层作出更新的过程。在这个过程有一个核心的 API ，那就是 Object.defineProperty。在初始化的时候 Vue 会给递归遍历 data 中的所有属性，并且给每一个属性都添加 getter 和 setter 拦截器，在 setter 中会对比属性新的值和旧的值是否相等，如果不相等就通知消息订阅器(dep)，实际上就是调用消息订阅器中的 notify 方法。实现双向绑定还有一个关键点就是给属性添加订阅者，由于属性可能在多个地方进行使用，所以属性有多个订阅者，这些订阅者是保存在消息订阅器中的数组里。属性的订阅者是在属性的 getter 中被添加到消息订阅器的数组中的。订阅者在 compile 过程中被创建，在创建订阅者的时候会给订阅者添加一个回调函数，这个回调函数在数据更新的时候会被调用，在订阅者的构造函数中会对属性进行取值，取值会触发 getter，所以就将订阅者添加到消息订阅器中了。我总结一下通知消息订阅器数据有更新是在 setter 中进行的，往消息订阅器中添加订阅者是在 getter 中进行的，订阅者是在 compile 过程中被创建。Observer 的作用是劫持属性值的变更，Dep 的作用是收集属性的观察者，Watcher 的作用是收集属性变化之后要执行的回调函数。Compile 的作用是解析模版，在解析模版的过程中发现了某个属性，就给这个属性添加一个 watcher

View 层变化，ViewModel 层感知变化，然后 Model 层作出更新。能够直接引起 View 层发生变化的元素，通常是表单元素，例如：单行输入框、多行输入框、下拉框等，并且当这些控件的值发生了改变，要让 Model 层跟着变化，还需要在标签上使用 v-model 指令，所以 v-model 指令是 View 层改变引起 Model 层数据改变的关键。在 VueJs 在解析模板的时候会解析模板上的所有指令，事件等，到遇到 v-model 的时候，它就会给当前节点绑定一个 input 事件，在 input 事件处理程序中对 Model 层的数据进行赋值




