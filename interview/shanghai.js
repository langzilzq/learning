// 小公司
// 字符串替换 不能用字符串函数
function strReplace(a, b, c) {
  if (
    !(typeof a === 'string' && typeof b === 'string' && typeof c === 'string')
  ) {
    return 0
  }
  if (b === '') return a
  const targetLen = b.length
  const arrA = a.split('')
  const arrB = b.split('')
  for (let start = 0; start < a.length; start++) {
    if (start + targetLen > arrA.length) {
      break
    }
    const end = start + targetLen
    const arr = arrA.slice(start, end)

    if (JSON.stringify(arr) === JSON.stringify(arrB)) {
      arrA.splice(start, end - start, c)
    }
  }
  return arrA.join('')
}

console.log(strReplace('ABCZXMA', '', 'c'))

// function arrPart(a) {
//   const result = []
//   for (var i = 0; i < a.length; i++) {
//     let t = []
//     for (let j = i; j < a.length; j++) {
//       t = [...t, a[j]]
//       result.push(t)
//     }
//   }
//   // result.push([])
//   return result
// }

// const arr = [1, 2, 4, 3]

// const res = arrPart(arr)
// console.log(res.includes(arr))
// const arr1 = ['1', 2, 4, 3]
// console.log(arr.toString() == arr1.toString())
// console.log(JSON.stringify(arr1) === JSON.stringify(arr))

// console.log()
