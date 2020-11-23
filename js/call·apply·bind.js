//call
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
//
// function Male(name, age, sex) {
//     Person.call(this, name, age)
//     // Person.apply(this, [name, age])
//
//     this.sex = sex;
// }
//
// const men = new Male('lzq', 30, 'male')
// console.log(men)

const xw = {
  name: '小王',
  gender: '男',
  age: 24,
  // say(from, to) {
  //     console.log(this.name + " , " + this.gender + " ,今年" + this.age + '来自：' + from + '去' + to)
  // },
  say: function () {
    return () => {
      console.log(this.name)
    }
  },
  allow: () => {
    return function () {
      console.log(this)
      console.log(this.name)
    }
  },
}
const xh = {
  name: '小红',
  gender: '女',
  age: 18,
}
// xw.say()
// xw.say.call(xh)
xw.allow.call(xh)()

// xw.say('上海', '我家')
// xw.say.call(xh, '上海', '我家')
// xw.say.apply(xh, ['上海', '我家'])
// xw.say.bind(xh, '上海', '我家')()

//apply
// const arr = [1, 5, 10, 20, 100]
// const max = Math.max.apply('', arr)
// console.log(max) //100

// const min = Math.min(...arr)
// console.log(min) //1
