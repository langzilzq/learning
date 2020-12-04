// 快手
// 连续数组替换
function arrReplace(arr) {
  const res = []
  let temp = []

  arr.forEach((item, index) => {
    temp.push(item)
    if (item !== arr[index + 1] - 1) {
      if (temp.length === 1) {
        res.push(temp[0])
      } else {
        res.push(temp[0] + '-' + temp[temp.length - 1])
      }
      temp = []
    }
  })

  return res
}

console.log(arrReplace([1, 2, 3, 1, 2, 3, 4, 6, 8, 9, 10]))

// 多数组排序
const arr = [
  [1, 2],
  [1, 4],
  [3, 1],
  [2, 2],
  [2, 4],
  [2, 3],
]
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]
  }
  return a[0] - b[0]
})
