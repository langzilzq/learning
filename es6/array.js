// 扩展运算符
// 1复制数组
const a1 = [1, 2];
// 写法一
let a2 = [...a1];
// 写法二
[...a2] = a1;
// 2合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

console.log([...'hello'])

Array.from([1, 2, 3]).map(x => x * x)//[ 1, 4, 9 ]
// 等同于
Array.from([1, 2, 3], x => x * x)//[ 1, 4, 9 ]

// [1, 4, -5, 10].find((value, index, arr) => value < 0)//-5
// [1, 4, -5, 10].findIndex((value, index, arr) => value > 9)//3

// ['','',''].fill(7)//[ 7, 7, 7 ]

// ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，
// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"

console.log([1, 2, 3].includes(3))

console.log([1, [2, 3], 4].flat(Infinity))

[1, 3, 2, 4, 8, 5].sort((a, b) => a - b)