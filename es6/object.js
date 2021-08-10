console.log(1)
new Promise((reso, rej) => {
  console.log(2)
  setTimeout(() => console.log(3), 0)
  reso()
  rej()
  console.log(4)
})
  .then(() => console.log(5))
  .catch(() => console.log(7))

setTimeout(function () {
  console.log(6)
}, 0)

class A {
  constructor() {
    this.name = 'A'
  }
  click() {
    return this.name
  }
}

class B {
  constructor() {
    this.name = 'A'
  }
  click = () => {
    return this.name
  }
}

var a1 = new A()
var a2 = new A()
var b1 = new B()
var b2 = new B()

// console.log('1:', a1.click === a2.click) //true
// console.log('2:', b1.click === b2.click) //false
