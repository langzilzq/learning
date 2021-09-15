// 盛雨水
function CatchTheRain(arr) {
  if (arr.length < 3) return 0
  let leftIndex = 0
  let rightIndex = arr.length - 1
  let result = 0
  arr.some((item, index) => {
    if (item > arr[index + 1]) {
      leftIndex = index
      return true
    }
  })
  while (rightIndex >= 1 && arr[rightIndex - 1] >= arr[rightIndex]) {
    rightIndex--
  }
  while (leftIndex < rightIndex) {
    let leftH = arr[leftIndex]
    let rightH = arr[rightIndex]
    if (leftH <= rightH) {
      while (leftIndex < rightIndex) {
        leftIndex++
        if (leftH > arr[leftIndex]) {
          result += leftH - arr[leftIndex]
        } else {
          break
        }
      }
    } else {
      while (leftIndex < rightIndex) {
        rightIndex--
        if (rightH > arr[rightIndex]) {
          result += rightH - arr[rightIndex]
        } else {
          break
        }
      }
    }
  }
  return result
}
console.log(CatchTheRain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) //6
console.log(CatchTheRain([4, 2, 0, 3, 2, 5])) //9
console.log(CatchTheRain([5, 4, 1, 2])) //1
