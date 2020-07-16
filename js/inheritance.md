# 实现继承的方式

## 构造函数继承

```js
function Parent() {
  this.name = 'parent'
}

function Child() {
  Parent.call(this)
  this.type = 'child'
}
```

缺点：不能继承`Parent`的原型对象上的方法和属性

## 原型链继承

```js
function Parent() {
  this.name = 'parent'
  this.classes = ['js','css']
}

function Child() {
  this.type = 'child'
}
Child.prototype = new Parent()
```

缺点：

1. `Parent`实例上的引用类型，如数组，会在所有的`Child`实例上共享，只要某一个`Child`实例改变了引用类型的值，所有的`Child`实例上的值都变了
2. `Child`的原型对象的`constructor`的值变了,这导致不能判断某个实例是`Child`实例化的还是被`Parent`直接实例化的

## 原型链和构造函数组合继承

```js
function Parent() {
  this.name = 'parent'
  this.classes = ['js','css']
}

function Child() {
  Parent.call(this)
  this.type = 'child'
}
Child.prototype = new Parent()
```

缺点：

1. `Parent`执行了两次
2. `Child`的原型对象的`constructor`的值变了,这导致不能判断某个实例是`Child`实例化的还是被`Parent`直接实例化的

## 优化组合继承优化(终极方式)

```js
function Parent() {
  this.name = 'parent'
  this.classes = ['js','css']
}

function Child() {
  Parent.call(this)
  this.type = 'child'
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
```
