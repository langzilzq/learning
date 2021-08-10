// 判断js数据类型
// 1.typeof
// 返回数据类型，包含这7种： number、boolean、symbol、string、object、undefined、function。
// typeof null   返回类型错误，返回object
// 引用类型，除了function返回function类型外，其他均返回object。
// 其中，null 有属于自己的数据类型 Null ， 引用类型中的 数组、日期、正则 也都有属于自己的具体类型，而 typeof 对于这些类型的处理，只返回了处于其原型链最顶端的 Object 类型，没有错，但不是我们想要的结果。
const a = ''
const b = true
const c = 1
const d = {}
const e = []
const f = Function()
const g = Symbol()
const h = null
const i = undefined

const date1 = new Date()
const date2 = Date()
const date3 = Date

console.log(typeof a) //string
console.log(typeof b) //boolean
console.log(typeof c) //number
console.log(typeof d) //object
console.log(typeof e) //object
console.log(typeof f) //function
console.log(typeof g) //symbol
console.log(typeof h) //object
console.log(typeof i) //undefined
console.log(typeof date1) //object
console.log(typeof date2) //string
console.log(typeof date3) //function

// 2.toString()最完美的方法
// toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
// 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
console.log(Object.prototype.toString.call(a)) //[object String]
console.log(Object.prototype.toString.call(b)) //[object Boolean]
console.log(Object.prototype.toString.call(c)) //[object Number]
console.log(Object.prototype.toString.call(d)) //[object Object]
console.log(Object.prototype.toString.call(e)) //[object Array]
console.log(Object.prototype.toString.call(f)) //[object Function]
console.log(Object.prototype.toString.call(g)) //[object Symbol]
console.log(Object.prototype.toString.call(h)) //[object Null]
console.log(Object.prototype.toString.call(i)) //[object Undefined]
console.log(Object.prototype.toString.call(date1)) //[object Date]
console.log(Object.prototype.toString.call(date2)) //[object String]
console.log(Object.prototype.toString.call(date3)) //[object Function]

// 3.instanceof
// instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：instanceof 检测的是原型
console.log(a instanceof String) //flase
console.log(new String('1') instanceof String) //true
console.log(b instanceof Boolean) //flase
console.log(new Boolean(true) instanceof Boolean) //true
console.log(c instanceof Number) //flase
console.log(new Number(1) instanceof Number) //true
console.log(d instanceof Object) //true
console.log(e instanceof Array) //true
console.log(f instanceof Function) //true
console.log(g instanceof Symbol) //flase

function myInstanceof(left, right) {
  let proto = left.__proto__
  const protoType = right.prototype
  while (true) {
    if (proto === null) {
      return false
    }
    if (proto == protoType) {
      return true
    }
    proto = proto.__proto__
  }
}
console.log(myInstanceof(e, Array)) //true

// 4.constructor
// constructor是原型prototype的一个属性，当函数被定义时候，js引擎会为函数添加原型prototype，并且这个prototype中constructor属性指向函数引用， 因此重写prototype会丢失原来的constructor。
// 不过这种方法有问题：
// 1：null 和 undefined 无constructor，这种方法判断不了。
// 2：还有，如果自定义对象，开发者重写prototype之后，原有的constructor会丢失，因此，为了规范开发，在重写对象原型时一般都需要重新给 constructor 赋值，以保证对象实例的类型不被篡改。
console.log(a.constructor === String) //true
console.log(b.constructor === Boolean) //true
console.log(c.constructor === Number) //true
console.log(d.constructor === Object) //true
console.log(e.constructor === Array) //true
console.log(f.constructor === Function) //true
console.log(g.constructor === Symbol) //true
console.log(date1.constructor === Date) //true
console.log(date2.constructor === String) //true
console.log(date3.constructor === Function) //true

//手写new
// 1.新建空对象 即{}
// 2.将空对象的原型prototype指向构造函数的原型
// 3.讲空对象作为构造函数的上下文--改变this指向
// 4.对构造函数的返回值进行判断，确保返回的是对象
function myNew(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  const res = fn.apply(obj, args)
  return typeof res === Object ? res : obj
}
// 构造函数返回值的判断
// 一般情况下构造函数没有返回值，但是作为函数，是可以有返回值的。
// 那么在构造函数有返回值的情况下，new操作符做了什么？
// 先看两个例子：
// 注意一下上面两个返回值的差异
function Person(name) {
  this.name = name
  return 1 // return undefined/NaN/'string'/null
}
let me = new Person('快乐每一天')
console.log(me) // { name:'快乐每一天' }
function Person1(name) {
  this.name = name
  return { age: 12 }
}
let me1 = new Person1('快乐每一天')
console.log(me1) // { age:12 }
// 结论：
// 在new的时候，会对构造函数的返回值做一些判断：
// 1、如果返回值是基础数据类型，则忽略返回值
// 2、如果返回值是引用数据类型，则使用return 的返回，也就是new操作符无效

// promise实现retry
const res = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = Math.random(0, 1) * 100
      if (res >= 70) {
        resolve('done')
      }
      reject('noyet')
    }, 1000)
  })
}
res()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
    retry(res, 3)
  })

function retry(promise, times) {
  return new Promise(function (resolve, reject) {
    promise()
      .then((res) => {
        console.log(res)
        resolve
      })
      .catch(function (erro) {
        console.log(`还有 ${times} 次尝试`)
        if (0 == times) {
          console.log(erro)
          reject
        } else {
          times--
          retry(promise, times)
        }
      })
  })
}

// react 计时器组件
import React, { useState, useEffect } from 'react'

const Time = (props) => {
  const [time, setTime] = useState(props.count || 0)

  useEffect(() => {
    if (props.count) {
      setTime(props.count)
    }
    let res = time
    const interval = setInterval(() => {
      if (!res) {
        return clearInterval(interval)
      }
      res--
      setTime(res)
    }, 1000)
  }, [props.count])

  return <div>{time}</div>
}
//<Time count={10} />

// this指向
var a = 1
var b = {
  c: function () {
    console.log(this.a)
  },
  d: () => {
    console.log(this.a)
  },
}
b.d.bind({
  a: 2,
})
var fun = b.c
fun() //undefined
b.c() //undefined
b.d() //undefined
