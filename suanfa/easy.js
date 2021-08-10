// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
function Add(num1, num2) {
  while (num2 !== 0) {
    const temp = num1 ^ num2 //相加各个位的值 异操作
    num2 = (num1 & num2) << 1 //相加进位的值 与操作
    num1 = temp
  }
  return num1
}

// console.log(Add(12, 5))

// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
// 不能使用除法。（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
function multiply(array) {
  const B = []
  const len = array.length
  array.forEach((item, index) => {
    let s = 1
    if (index < 1) {
      for (let i = 1; i < len; i++) {
        s *= array[i]
      }
      B[index] = s
    } else if (index === len) {
      for (let i = 0; i < len - 1; i++) {
        s *= array[i]
      }
      B[index] = s
    } else {
      for (let i = 0; i < len; i++) {
        if (index === i) {
          continue
        }
        s *= array[i]
      }
      B[index] = s
    }
  })
  return B
}

// const arr = [98, 42, 25, 54, 15, 3];
// console.log(multiply(arr))

function TreeDepth(pRoot) {
  // write code here
  if (pRoot === null) return 0
  const left = TreeDepth(pRoot.left)
  const temp = left
  const right = TreeDepth(pRoot.right)

  return Math.max(left, right) + 1
}

//寻找数组中出现一次的元素
function FindNumsAppearOnce(array) {
  // write code here
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
  const list = []
  array.forEach((item, index) => {
    let res = true
    for (let i = 0; i < array.length; i++) {
      if (item === array[i] && i !== index) {
        res = false
      }
    }
    if (res) {
      list.push(item)
    }
  })
  return list
}

// const arr = [1, 2, 2, 4, 4, 5];
// console.log(FindNumsAppearOnce(arr))

//一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number) {
  if (number === 1) {
    return 1
  }
  if (number === 2) {
    return 2
  }

  return 2 * jumpFloorII(number - 1)
}

// console.log(jumpFloorII(3))

//求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
function Sum_Solution(n) {
  // write code here
  return n && n + Sum_Solution(n - 1)
}

// console.log(Sum_Solution(100))

//给一个数组，返回它的最大连续子序列的和
function FindGreatestSumOfSubArray(array) {
  // write code here
  let res = array[0] //记录当前所有子数列的最大值
  let maxV = array[0] //包含array[i]的连续数组的最大值
  for (let i = 1; i < array.length; i++) {
    maxV = Math.max(maxV + array[i], array[i])
    res = Math.max(maxV, res)
  }
  return res
}

// const arr = [-1, 2, 2, 4, 4, 5];
// console.log(FindGreatestSumOfSubArray(arr))

//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
function jumpFloor(number) {
  if (number === 1) {
    return 1
  }
  let first = 1
  let second = 2
  for (let i = 3; i <= number; i++) {
    let third = first + second
    first = second
    second = third
  }
  return second
}

// console.log(jumpFloor(4))
//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
function MoreThanHalfNum_Solution(arr) {
  const len = arr.length
  let res = 0
  arr.forEach((item) => {
    let count = 0
    arr.forEach((item1) => {
      if (item === item1) {
        count++
      }
    })
    if (count > len / 2) {
      res = item
    }
  })
  return res
}
// const arr = [2, 2, 2, 2, 4, 5];
// console.log(MoreThanHalfNum_Solution(arr))
