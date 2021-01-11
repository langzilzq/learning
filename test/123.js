// var a = { value: 1 },
//   b = { value: 2 };
//
// foo = (obj) => {
//   obj.value = 2;
//   return obj;
// };
//
// bar = (obj) => {
//   obj = { value: 1 };
//   return obj;
// };
// console.log(foo(a));
// console.log(bar(b));
// console.log(a);
// console.log(b);
// setTimeout(function () {
//     console.log('1')
// });

// new Promise(function (resolve) {
//     console.log('2');
//     for (var i = 0; i < 10000; i++) {
//         i == 99 && resolve();
//     }
// }).then(function () {
//     console.log('3')
// });

// console.log('4');
// var a = 10;
// function foo () {
//     console.log(a); // ??
//     var a = 20;
// }
// foo();
// var a = 10;
// function foo () {
//     console.log(a); // ??
//     let a = 20;
// }
// foo();

// var array = [];
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) }, 0)
//     array.push(() => i);
// }
// var newArray = array.map(el => el());
// console.log(newArray); // ??
// function foo () {
//     setTimeout(foo, 0); // 是否存在堆栈溢出错误?
// };
// function foo () {
//     return Promise.resolve().then(foo);
// };
// (function test () {
//     setTimeout(function () { console.log(4) }, 0);
//     new Promise(function executor (resolve) {
//         console.log(1);
//         for (var i = 0; i < 10000; i++) {
//             i == 9999 && resolve();
//         }
//         console.log(2);
//     }).then(function () {
//         console.log(5);
//     });
//     async function text () {
//         console.log('async')
//         await text1()
//         console.log('async done')
//     }

//     async function text1 () {
//         console.log('await')
//     }
//     text()

//     console.log(3);
// })()

// function count(value = 0) {
// 	return function () {
// 		return value++
// 	}
// }

// const fun = count(10)
// setInterval(() => console.log(fun()), 100)

 x=1
const obj={
  x:2,
  say:function()
  {
    console.log(this.x)
    return function(){
      console.log(this.x)
    }
  }
}

const fun=obj.say
fun()

obj.say()()