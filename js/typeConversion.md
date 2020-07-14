# 类型转换

js 有 7 种类型转化：number,string,null,undefined,symbol,boolean,object

有三种显示类型转换，分别是：Number、String、Boolean

## 显示转化

### Number

用 Number 方法转化一个数值，返回数值本身

```js
Number(2.3) // 2.3
Number(NaN) // NaN
```

用 Number 方法转化空字符串，返回0

```js
Number('') // 0
```

用 Number 方法转化数字字符串，返回数字字符串对应的数字，否则返回 NaN

```js
Number('1.2') // 1.2
Number('233') // 233
Number('2334ggg') // NaN
```

用 Number 方法转化 null, 返回 0

```js
Number(null) // 0
```

用 Number 方法转化 undefined，返回 NaN

```js
Number(undefined) // NaN
```

用 Number 方法转化 true ，返回 1，用 Number 方法转化 false ，返回 0

```js
Number(true) // 1
Number(false) // 0
```

用 Number 转化对象会先调用对象的 valueOf 方法，如果返回的值是一个基础类型，就用 Number 去转化这个基础类型，如果返回的值不是基础类型，再调用 toString 方法，如果返回的值是一个基础类型，就用 Number 去转化这个基础类型，否则报错

```js
// 先调用 valueOf 方法，返回 {a:33}，然后在 toString 方法，返回 [object Object],然后用 Number 转化 [object Object] 结果为 NaN
Number({a:33}) // NaN
```

```js
// [] 的 valueOf 方法返回 []，[] 的 toString 方法返回空字符串，Number('') 返回 0
Number([]) // 0
// [1,2] 的 valueOf 方法返回 [1,2]，[1,2] 的 toString 方法返回 '1,2'，Number('1,2') 返回 NAN
Number([1,2]) // NaN
```

### String

用 String 方法转化数值，返回数值的字符串形式

```js
String(123) // '123'
String(NaN) // 'NaN'
```

用 String 方法转化字符串，返回字符串本身

```js
String('1223') // '1223'
```

用 String 方法转化 true ，返回 'true';转化 false，返回 'false'

```js
String(true) // 'true'
String(false) // 'false'
```

用 String 方法转化 null，返回 'null'

```js
String(null) // 'null'
```

用 String 方法转化 undefined ，返回 'undefined'

```js
String(undefined) // 'undefined'
```

用 String 转化对象会先调用对象的 toString 方法，如果返回的值是一个基础类型，就用 String 去转化这个基础类型，如果返回的值不是基础类型，再调用 valueOf 方法，如果返回的值是一个基础类型，就用 String 去转化这个基础类型，否则报错

```js
String([]) // ''
String[1,2] // '1,2'
```

```js
String({}) // '[object Object]'
```

### Boolean

1. Boolean(true) : true
2. Boolean(false) : false
3. Boolean('') : false
4. Boolean(' '): true
5. Boolean('23'): true
6. Boolean(null): false
7. Boolean(0): false
8. Boolean(23): true
9. Boolean(undefined) : false
10. Boolean([]) : true
11. Boolean({}): true

## 隐式转化

1. {} + [] === 0
2. [] + {} === '[object Object]'
3. ({}) + ({}) === '[object Object][object Object]'
4. [] + [] === ''
5. true + true === 2
6. 1 + {a: 1} === '1[object Object]'




