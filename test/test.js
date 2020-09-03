// 加号是最快将字符串转为数字
// let str = '123.5';
// console.log(str)
// str = +str;
// console.log(str)
// const obj = {};
// console.log(obj.someprop);
//===JS比较基本类型和对象不一样，对象JS通过引用或存储变量的内存中的地址对它们进行比较

const a = {}, b = {}
const c = a
// console.log(a === b) //false
// console.log(a === c) //true

// console.log(!!'');
// console.log(!!0);
// console.log(!!NaN);
// console.log(!!' ');
// console.log(!!{});
// console.log(!![]);
// console.log(!!1);
// console.log(!![].length);

// var F = function() {};
// Object.prototype.a = function() {
//     console.log('a');
// };
// Function.prototype.b = function() {
//     console.log('b');
// } ;
// var f = new F();
// f.a();
// f.b();
// F.a();
// F.b();


// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
// }
// for (var j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 0);
// }

function Foo() {
    Foo.a = function () {
        console.log(1)
    }
    this.a = function () {
        console.log(2)
    }
}

Foo.prototype.a = function () {
    console.log(3)
}
Foo.a = function () {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();


async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');
const name='hello';
const  age=21;
// console.log(Number.isNaN(name))
// console.log(Number.isNaN(age))
//
// console.log(isNaN(name)) true
// console.log(isNaN(age))
[1,2,3,4].reduce((x,y)=>{
  console.log(x,y)
})
// 1 2
// undefined 3z
// undefined 4

