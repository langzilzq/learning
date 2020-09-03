const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((pre, item) => {
    // console.log(pre)
    // console.log(item)
    return pre + item
}, 0)
// console.log(sum) // 15

const str = 'jshdjsdsadsadsaihh';
const obj = str.split('').reduce((pre, item) => {
    console.log(pre)
    pre[item] ? pre[item]++ : pre[item] = 1
    return pre
}, {})
console.log(Object.values(obj)) // {j: 2, s: 2, h: 3, d: 1, i: 1}
