function sum() {
  this.sum = 0
  // return this.sum
}

sum.prototype.add = function (num = 0) {
  this.sum += num
  return this
}

sum.prototype.value = function () {
  return this.sum
}

const num = new sum()

console.log(num.add(1).add(2).add(5).value())

function add(x) {
  let sum = x
  function tem(y) {
    sum += y
    return tem
  }

  tem.toString = function () {
    return sum
  }
  return tem
}

// console.log(add(1)(2).toString())

// function sum(value = 0) {
//   return function add() {
//     return ++value
//   }
// }
// const add = new sum()
// setInterval(() => {
//   console.log(add())
// }, 1000)
