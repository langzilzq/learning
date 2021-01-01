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
