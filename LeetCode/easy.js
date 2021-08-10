//数字反转
const number = 1001
fan = (number) => {
  let res = 0
  if (number > 0) {
    res = parseInt(number.toString().split('').reverse().join(''))
  } else {
    res = parseInt('-' + number.toString().split('').reverse().join(''))
  }
  if (res > 2147483647 || res < -2147483648) {
    return 0
  } else return res
}
// console.log(fan(number))

// 回文数
isPalindrome = (number) => {
  //转字符
  //     let res = 0, num = Number(number);
  //     if (number >= 0) {
  //         res = number.toString().split("").reverse().join("")
  //         return num == res
  //     } else {
  //         return false
  //     }
  //    数组
  let res = false
  if (number >= 0) {
    const len = number.toString().length
    if (len === 1) {
      res = true
    } else {
      for (let i = 0; i < Math.floor(len / 2); i++) {
        const str = number.toString()
        if (str[i] === str[len - i - 1]) {
          res = true
        } else {
          res = false
          break
        }
      }
    }
    return res
  } else {
    return false
  }
}
// console.log(isPalindrome(number))

//罗马数字转数字
const str = 'IV'
romanToInt = (str) => {
  //array
  // const len = str.length
  // const strArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'], strValue = [1, 5, 10, 50, 100, 500, 1000];
  // let sum = 0;
  // for (let i = 0; i < len; i++) {
  //     if (strArr.includes(str[i])) {
  //         const index = strArr.findIndex(value => {
  //             return value === str[i]
  //         })
  //         const index1 = strArr.findIndex(value => {
  //             return value === str[i + 1 >= len ? len - 1 : i + 1]
  //         })
  //         if (index1 - index >= 1) {
  //             sum -= strValue[index]
  //         } else {
  //             sum += strValue[index]
  //         }
  //         console.log(sum)
  //     } else {
  //         throw '输入有误'
  //     }
  // }
  // return sum

  //object
  let o = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    },
    sum = 0
  const len = str.length
  for (let i = 0; i < len; i++) {
    let tempValue = o[str[i]]
    if (tempValue < o[str[i + 1 >= len ? len - 1 : i + 1]]) {
      sum -= tempValue
    } else {
      sum += tempValue
    }
  }

  return sum
}
// console.log(romanToInt(str))

// 数字转罗马数字
intToRoman = (num) => {
  const t = ['', 'M', 'MM', 'MMM']
  h = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  o = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  return t[Math.floor(num / 1000)] + h[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + o[num % 10]
}
// console.log(intToRoman(3))

//有效符号判断
const str1 = '['
isValid = (str) => {
  const len = str.length
  if (len % 2) {
    return false
  } else if (len === 0) {
    return true
  }
  let res = false
  const left = ['{', '[', '('],
    obj = {
      '{': '}',
      '[': ']',
      '(': ')',
    }
  let tempArr = []
  for (let i = 0; i < len; i++) {
    if (left.includes(str[i])) {
      tempArr.push(obj[str[i]])
    } else {
      res = tempArr[tempArr.length - 1] === str[i]
      if (!res) break
      tempArr.pop()
    }
  }
  return res && tempArr.length === 0
}
// console.log(isValid(str1))

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
const array = ['flow', 'flower', 'fl', 'flowerr']

// longestCommonPrefix = arr => {
//     if (arr.length === 1) {
//         return arr[0]
//     }
//     if (!arr.length) {
//         return ''
//     }
//     let minLen = -1
//     let minIndex = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (minLen === -1 || arr[i].length === 0) {
//             minLen = arr[i].length
//             minIndex = i
//         } else {
//             if (arr[i].length < minLen) {
//                 minLen = arr[i].length
//                 minIndex = i
//             }
//         }
//     }
//     if (minLen === 0) {
//         return ''
//     }
//     let value = arr.splice(minIndex, 1)[0]
//     for (let i = value.length; i > 0; i--) {
//         let res = false
//         for (let j = 0; j < arr.length; j++) {
//             res = arr[j].substring(0, i) === value.substring(0, i)
//             if (!res)
//                 break
//         }
//         if (res) {
//             value = value.substring(0, i)
//             break
//         } else if (i === 1) {
//             value = ''
//         }
//     }
//     console.log(value)
//     return value
// }
// longestCommonPrefix(array)
longestCommonPrefix = (str) => {
  if (str.length === 0) return ''
  let ans = str[0]
  for (let i = 1; i < str.length; i++) {
    let j = 0
    for (; j < ans.length && j < str[i].length; j++) {
      if (ans[j] !== str[i][j]) break
    }
    ans = ans.substr(0, j)
    if (ans === '') return ans
  }
  return ans
}
// console.log(longestCommonPrefix(array))

//移除数组中val的值并返回新的长度

removeElement = (nums, val) => {
  let numsIndex = []
  nums.forEach((item, index) => {
    if (item === val) {
      numsIndex.push(index)
    }
  })
  let count = 0
  for (let i = 0; i < numsIndex.length; i++) {
    nums.splice(numsIndex[i] - count, 1)
    count++
  }
  return nums.length
}
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

strStr = (haystack, needle) => {
  return haystack.indexOf(needle)
}
// strStr('hello','ll')
// strStr('aaaaa','bba')

//元素插入
searchInsert = (nums, target) => {
  const index = nums.findIndex((item) => {
    return item >= target
  })
  return index === -1 ? nums.length : index
}
//最大子序列和
maxSubArray = (nums) => {
  //动态规划
  // let sum = 0
  // nums.forEach((item, index) => {
  //     if (item > 0) {
  //         sum = sum > 0 ? sum + item : item
  //     } else {
  //         sum = item > sum ? item : sum + item
  //     }
  //     nums[index] = sum
  // })
  // console.log(Math.max(...nums))
  // return Math.max(...nums)

  //    贪心
  let maxSum
  let currentSum = (maxSum = nums[0] > 0 ? 0 : nums[0])
  nums.forEach((item) => {
    currentSum = Math.max(item, currentSum + item)
    maxSum = Math.max(currentSum, maxSum)
  })
  return maxSum
}
// maxSubArray([-1])
//最后一个单词的长度
lengthOfLastWord = (s) => {
  let end = s.length - 1
  for (; end > 0; end--) {
    if (s[end] !== ' ') break
  }
  // while (end >= 0 && s[end] === ' ') end--;
  if (end < 0) return 0
  let start = end
  for (; start >= 0; start--) {
    if (s[start] === ' ') break
  }
  return end - start
}
// console.log(lengthOfLastWord("456456a    "))

plusOne = (digits) => {
  const len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] !== 0) return digits
  }
  digits = [...Array(len + 1)].map((_) => 0)
  digits[0] = 1
  return digits
}
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))

mySqrt = (x) => {
  return Math.floor(Math.sqrt(x))
}
// console.log(mySqrt(8))
climbStairs = (n) => {
  if (n === 0 || n === 1) return n
  let a = 1,
    b = 1,
    c
  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

// console.log(climbStairs(8))
//剪绳子
cutRope = (number) => {
  if (number <= 0) return 0
  if (number === 1 || number === 2) return 1
  if (number === 3) return 2
  let m = number % 3
  switch (m) {
    case 0:
      return Math.pow(3, number / 3)
    case 1:
      return Math.pow(3, Math.floor(number / 3 - 1)) * 4
    case 2:
      return Math.pow(3, Math.floor(number / 3)) * 2
  }
}
// console.log(cutRope(8))
// console.log(cutRope(9))

/**
 *@desc 杨辉三角
 *@param n number
 */

generate = (n) => {
  const arr = []
  for (let i = 0; i <= n; i++) {
    const arr1 = []
    for (let j = 0; j < i + 1; j++) {
      if (arr1.length !== 0) {
        let res
        if (arr[i - 1][j]) {
          res = arr[i - 1][j - 1] + arr[i - 1][j]
        } else {
          res = arr[i - 1][j - 1]
        }
        arr1.push(res)
      } else {
        arr1.push(1)
      }
    }
    arr[i] = arr1
  }
  return arr[n]
}
// generate(5)

/**
 * @desc 买卖股票，最大利润
 * 输入: [7,1,5,3,6,4]
 输出: 5
 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 */
maxProfit = (prices) => {
  if (!prices.length) {
    return 0
  }
  // let minPrice = prices[0]
  // let max = 0
  // for (let i = 0; i < prices.length; i++) {
  //     if (prices[i] < minPrice) {
  //         minPrice = prices[i]
  //     } else {
  //         max = Math.max(max, prices[i] - minPrice)
  //     }
  // }
  // return max

  /**
   *@desc 暴力历遍
   */
  // let max = 0
  // for (let i = 0; i < prices.length - 1; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //         let p = prices[j] - prices[i]
  //         if (p > max) max = p
  //     }
  // }
  // return max
  let total = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) total += prices[i + 1] - prices[i]
  }
  return total
}
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
/**
 *@desc 斐波那契数列
 */
let cache = []
recursive = (n) => {
  if (cache[n]) return cache[n]
  if (n <= 0) return 0
  if (n === 1) return 1
  const res = recursive(n - 1) + recursive(n - 2)
  cache[n] = res
  return res
}
// console.time('recursive')
// console.log(recursive(40))
// console.timeEnd('recursive')

/**
 * @desc 盛最多水的容器
 * @param height array
 */
maxArea = (height) => {
  if (!height.length) {
    return 0
  }
  if (height.length === 1) {
    return height[0]
  }
  let i = 0,
    j = height.length - 1,
    max = j * Math.min(height[0], height[j])
  while (i < j) {
    if (height[i] < height[j]) {
      i++
      if (height[i - 1] < height[i]) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
      }
    } else {
      j--
      if (height[j + 1] < height[j]) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
      }
    }
  }
  return max
}
// console.time('max')
// console.log(maxArea([1]))
// console.timeEnd('max')
myAtoi = (str) => {
  const res = parseInt(str)
  if (res && res < 2 ** 31 && res > (-2) ** 31) {
    return res
  } else if (res && res >= 2 ** 31) {
    return 2 ** 31 - 1
  } else if (res && res <= (-2) ** 31) {
    return (-2) ** 31
  }
  return 0
}
// console.log(myAtoi(2147483648))

// 中位数
findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => {
    return a - b
  })
  if (arr.length % 2) {
    return arr[Math.floor(arr.length / 2)].toFixed(1)
  } else {
    return ((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2).toFixed(1)
  }
}

// console.log(findMedianSortedArrays([1, 2], [3, 4]))

// 三数和最接近目标
threeSumClosest = (nums, target) => {
  nums.forEach((item) => {})
}

// 查找元素
searchRange = function (nums, target, cache = 0) {
  /**
   * @desc 暴力
   */
  // let res = []
  // nums.forEach((item, index) => {
  //     if (item === target && res.length < 2) {
  //         res.push(index)
  //     }
  //     if (item === target && res.length === 2) {
  //         res.splice(1, 1, index)
  //     }
  // })
  // if (res.length === 2) {
  //     return res
  // } else if (res.length === 1) {
  //     res.push(...res)
  //     return res
  // }
  // return [-1, -1]

  /**
   * @desc 暴力
   */
  // const mid = Math.floor(nums.length / 2)
  // if (nums[mid] === target) {
  //     let i = j = mid
  //     while (nums[i - 1] === target) { i-- }
  //     while (nums[j + 1] === target) { j++ }
  //     return cache ? [i + cache, j + cache] : [i, j]
  // } else if (nums[mid] > target) {
  //     nums = nums.slice(0, mid)
  //     return searchRange(nums, target)
  // } else if (nums[mid] < target) {
  //     nums = nums.slice(mid + 1)
  //     cache = cache + mid + 1
  //     return searchRange(nums, target, cache)
  // }
  // return [-1, -1]
  /**
   * @desc 二分
   */
  // let left = 0, right = nums.length - 1, mid;
  // while (left <= right) {
  //     mid = Math.floor((left + right) / 2);
  //     if (nums[mid] === target) break;
  //     if (nums[mid] > target) right = mid - 1;
  //     else left = mid + 1;
  // }
  // if (left > right) return [-1, -1];
  // let i = mid, j = mid
  // while (nums[i] === nums[i - 1]) i--
  // while (nums[j] === nums[j + 1]) j++
  // return [i, j]

  /**
   * @desc Api
   */
  if (nums.indexOf(target) === -1) return [-1, -1]
  let res = []
  res.push(nums.indexOf(target))
  res.push(nums.lastIndexOf(target))
  return res
}

// console.log(searchRange([0, 0, 1, 1, 1, 2, 4, 4, 4, 4, 5, 5, 5, 6, 8, 8, 9, 9, 10, 10, 10], 5))
// 2的幂次数
isPowerOfTwo = function (n) {
  let res = false
  for (let i = 0; ; i++) {
    if (2 ** i === n) {
      res = true
      break
    }
    if (2 ** i > n) {
      break
    }
  }
  return res
}
// console.log(isPowerOfTwo(218))

majorityElement = function (nums) {
  let obj = {},
    res
  if (nums.length === 1) return nums[0]
  nums.forEach((item) => {
    if (obj[item]) {
      obj[item]++
      if (obj[item] >= Math.ceil(nums.length / 2)) {
        res = item
      }
    } else {
      obj[item] = 1
    }
  })

  return res
}
// console.log(majorityElement([-2147483648, 0, 0]))

function getUrlParam(sUrl = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key', sKey) {
  const url = sUrl.slice(sUrl.indexOf('?') + 1)
  const arr = url.slice(0, url.indexOf('#')).split('&')
  if (sKey) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i].split('=')
      if (temp[0] === sKey) res.push(temp[1])
    }
    if (res.length === 1) {
      return res[0]
    } else if (res.length === 0) {
      return ''
    } else {
      return res
    }
  } else {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i].split('=')
      if (obj[temp[0]]) {
        obj[temp[0]] = [...obj[temp[0]], temp[1]]
      } else {
        obj[temp[0]] = temp[1]
      }
    }
    return obj
  }
}
// console.log(getUrlParam())

Array.prototype.uniq = function () {
  return [...new Set(this)]
}
// console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq())

function duringNum(num) {
  const res = []
  for (let i = 1; i < num; i++) {
    const str = i.toString().split('').reverse().join('')
    if (str == i && i > 10) res.push(str)
  }
  console.log(res.length)
  return res
}
// console.log(duringNum(10000));

/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  const numArr = []
  const strArr = []
  let num = 0
  let str = ''
  for (const i in s) {
    if (s[i] === '[') {
      numArr.push(num)
      strArr.push(str)
      num = 0
      str = ''
    } else if (s[i] === ']') {
      let count = numArr.pop()
      let temp = ''
      for (let i = 0; i < Number(count); i++) {
        temp += str
      }
      str = strArr.pop() + temp
    } else if (s[i] >= 0 && s[i] <= 9) {
      // num = num * 10 + Number(s[i])
      num += s[i]
    } else {
      str += s[i]
    }
  }
  return str
}

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = ''
  let res = ''
  for (const i of s) {
    if (str.includes(i)) {
      res = str.length > res.length ? str : res
      const position = str.indexOf(i)
      str = str.slice(position + 1)
      str += i
    } else {
      str += i
    }
  }
  return Math.max(res.length, str.length)
}
lengthOfLongestSubstring('abcabcbb')

// 最长有效括号

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const res = []
  const temp = []
  for (const i in s) {
    if (s[i] === '(') {
      temp.push({ '(': Number(i) })
    } else {
      if (temp.length) {
        const arr = temp.pop()
        res.push(arr['('], Number(i))
      }
    }
  }
  res.sort((a, b) => {
    return a - b
  })
  let start = res[0]
  let end
  let result = 0
  res.forEach((item, index) => {
    if (item + 1 !== res[index + 1]) {
      end = item
      const len = end - start + 1
      result = len > result ? len : result
      start = res[index + 1]
    }
  })
  console.log(result)
  return result
}

// longestValidParentheses('()(()')

// 两数相除
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const res = dividend / divisor
  if (res > 2 ** 31 - 1 || res < (-2) ** 31) {
    return 2 ** 31 - 1
  }
  return res > 0 ? Math.floor(res) : Math.ceil(res)
}

// console.log(divide(-2147483648, -1))

// 只出现一次的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const arr = []
  nums.forEach((item) => {
    if (arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1)
    } else {
      arr.push(item)
    }
  })
  console.log(arr)
  return arr[0]
}

// singleNumber([4, 1, 2, 1, 2])

var singleNumber1 = function (nums) {
  const arr = []
  const res = []
  nums.forEach((item) => {
    if (arr.includes(item)) {
      const resIndex = res.indexOf(item)
      if (resIndex !== -1) res.splice(resIndex, 1)
    } else {
      arr.push(item)
      res.push(item)
    }
  })
  console.log(res)
  return res[0]
}

// singleNumber1([2, 2, 3, 2])

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  wordDict.forEach((item) => {
    while (s.includes(item)) {
      s = s.replace(item, '')
    }
  })
  if (s) {
    return false
  }
  return true
}

wordBreak('applepenapplepen', ['apple', 'pen'])
