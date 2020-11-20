//line=readline()
function arrReplace(arr) {
  const res = []
  let temp = []

  arr.forEach((item, index) => {
    temp.push(item)
    if (item !== arr[index + 1] - 1) {
      if (temp.length === 1) {
        res.push(temp[0])
      } else {
        res.push(temp[0] + "-" + temp[temp.length - 1])
      }
      temp = []
    }
  })

  return res
}

console.log(arrReplace([1, 2, 3, 1, 2, 3, 4, 6, 8, 9, 10]))
