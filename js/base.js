function test(person) {
  person.age = 26
  person = {
    name: 'hzj',
    age: 18,
  }
  return person
}
const p1 = {
  name: 'fyq',
  age: 19,
}
const p2 = test(p1)
console.log(p1) // -> ?
console.log(p2) // -> ?

'1'.toString() //为什么可以用

var s = new Object('1')
s.toString()
s = null

console.log(0.1 + 0.2)

var a = {
  value: 0,
  valueOf: function () {
    this.value++
    return this.value
  },
}

console.log(a == 1 && a == 2) //true

for (var i = 1; i <= 5; i++) {
  ;(function (j) {
    setTimeout(function () {
      console.log(j)
    }, 0)
  })(i)
}

for (var i = 1; i <= 5; i++) {
  setTimeout(
    function (j) {
      console.log(j)
    },
    0,
    i
  )
}

var a = { value: 1 },
  b = { value: 2 }
foo = (obj) => {
  obj.value = 2
  return obj
}
bar = (obj) => {
  obj = { value: 1 }
  return obj
}
console.log(foo(a))
console.log(bar(b))
console.log(a)
console.log(b)

function count(value = 0) {
  return function () {
    return value++
  }
}
const fun = count(10)
setInterval(() => console.log(fun()), 1000)
