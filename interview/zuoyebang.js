// 项目
// 盒模型
// css扇形

// .my {
//   width: 0;
//   height: 0;
//   border: solid 50px transparent;
//   border-right-color: red;
//   border-radius: 50%;
// }

// 九宫格
// BFC
// eventloop
// 原型链


// 继承
// 继承的含义：
// • 父类公有属性和方法为子类公有属性和方法
// • 父类私有属性和方法为子类私有属性和方法
// 1.原型链继承

function Parent(){
  this.familyName = 'James'
}

Parent.prototype.skill = ()=>{
  console.log('to play basketball')
}

function Child(){
  this.name = 'Lebron'
}

// 子类原型指向父类实例
Child.prototype = new Parent

// Child.prototype.constructor = Child

// 注意：子类原型方法定义要在改变原型指向之后
Child.prototype.rap = ()=>{
  console.log('gigigigigigi')
}

let c = new Child

console.log(c.name,c.familyName) //Lebron James
c.skill() //to play basketball
c.rap() //gigigigigigi
// 缺点：父类公有和私有属性方法都为子类公有

// 2.call寄生继承
function Child1(){
  this.name = 'Lebron'
  // 把父类构造函数当做普通方法执行，改变this指向
  Parent.call(this) //相当于 Child.familyName = 'James'
}

Child1.prototype.rap = ()=>{
  console.log('gigigigigigi')
}

let c1 = new Child1
console.log(c1.name,c1.familyName) //Lebron James
// c1.skill() //报错
c1.rap() //gigigigigigi
// 缺点：因为没有父类实例无法继承父类原型上公有属性和方法，只能继承父类私有属性和方法为子类私有属性和方法

// 3.组合式（call + object.create方式原型继承）
function Child2(){
  this.name = 'Lebron'
  // 把父类构造函数当做普通方法执行，改变this指向
  Parent.call(this) //相当于 Child.familyName = 'James'
}
// Object.create方法第一个参数会把创建空对象的__proto__指向传入的对象
// 相当于 Child.prototype.__proto__ = Parent.prototype 但是Child.prototype.__proto__这种直接操作__proto__的方式IE浏览器并不支持
Child.prototype = Object.create(Parent.prototype)

Child1.prototype.rap = () =>{
  console.log('gigigigigigi')
}

console.log(c.name,c.familyName) //Lebron James
c.skill() //to play basketball
c.rap() //gigigigigigi

// 千分位 123456789=> 123,456,789

function thousands(num) {
  const arr = []
  let i = 0
  while (num >= 1000) {
    arr[i] = num % 1000
    i++
    num = Math.floor(num / 1000)
  }
  arr[i] = num
  return arr.reverse().join(',')
}

console.log(thousands(123456789))

// 二叉树深度

function TreeDepth(root) {
  if (root === null) return 0
  var left = TreeDepth(root.left)
  var right = TreeDepth(root.right)
  return Math.max(left, right) + 1
}
