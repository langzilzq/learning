//数字反转
const number = 1001;
fan = number => {

    let res = 0
    if (number > 0) {
        res = parseInt(number.toString().split("").reverse().join(""))
    } else {
        res = parseInt('-' + number.toString().split("").reverse().join(""))
    }
    if (res > 2147483647 || res < -2147483648) {
        return 0
    } else return res
}
// console.log(fan(number))

// 回文数
isPalindrome = number => {
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
                const str = number.toString();
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
const str = "IV"
romanToInt = str => {
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
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }, sum = 0
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

//有效符号判断
const str1 = "["
isValid = str => {
    const len = str.length
    if (len % 2) {
        return false
    } else if (len === 0) {
        return true
    }
    let res = false
    const left = ['{', '[', '('],
        obj = {
            '{': '}', '[': ']', '(': ')'
        }
    let tempArr = []
    for (let i = 0; i < len; i++) {
        if (left.includes(str[i])) {
            tempArr.push(obj[str[i]])
        } else {
            res = tempArr[tempArr.length - 1] === str[i]
            if (!res)
                break
            tempArr.pop()
        }
    }
    return res && tempArr.length === 0
}
// console.log(isValid(str1))


// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
const array = ["flow", "flower", "fl",'flowerr']

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
longestCommonPrefix = str => {
    if (str.length === 0)
        return "";
    let ans = str[0];
    for (let i = 1; i < str.length; i++) {
        let j = 0;
        for (; j < ans.length && j < str[i].length; j++) {
            if (ans[j] !== str[i][j])
                break;
        }
        ans = ans.substr(0, j);
        if (ans === "")
            return ans;
    }
    return ans;
}
console.log(longestCommonPrefix(array))

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
    console.log(nums.length)
    return nums.length
}
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

strStr = (haystack, needle) => {
    console.log(haystack.indexOf(needle))
    return haystack.indexOf(needle)
}
// strStr('hello','ll')
// strStr('aaaaa','bba')

//元素插入
searchInsert = (nums, target) => {
    const index = nums.findIndex(item => {
        return item >= target
    })
    return index === -1 ? nums.length : index
}
//最大子序列和
maxSubArray = nums => {
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
    let maxSum;
    let currentSum = maxSum = nums[0] > 0 ? 0 : nums[0]
    nums.forEach((item) => {
        currentSum = Math.max(item, currentSum + item)
        maxSum = Math.max(currentSum, maxSum)
    })
    console.log(maxSum)
    return maxSum
}
// maxSubArray([-1])
//最后一个单词的长度
lengthOfLastWord = s => {
    let end = s.length - 1;
    for (; end > 0; end--) {
        if (s[end] !== " ")
            break
    }
    // while (end >= 0 && s[end] === ' ') end--;
    if (end < 0) return 0;
    let start = end;
    for (; start >= 0; start--) {
        if (s[start] === " ")
            break
    }
    return end - start;
}
// console.log(lengthOfLastWord("456456a    "))

plusOne = digits => {

    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] !== 0)
            return digits;
    }
    digits = [...Array(len + 1)].map(_ => 0);
    digits[0] = 1;
    return digits;

}
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))

mySqrt = x => {
    return Math.floor(Math.sqrt(x))
}
// console.log(mySqrt(8))
climbStairs = n => {
    if (n === 0 || n === 1) return n;
    let a = 1, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// console.log(climbStairs(8))
//剪绳子
cutRope = number => {

    if (number <= 0) return 0
    if (number === 1 || number === 2) return 1
    if (number === 3) return 2
    let m = number % 3
    switch (m) {
        case 0 :
            return Math.pow(3, (number / 3))
        case 1 :
            return Math.pow(3, Math.floor((number / 3 - 1))) * 4
        case 2 :
            return Math.pow(3, Math.floor(number / 3)) * 2
    }
}
// console.log(cutRope(8))
// console.log(cutRope(9))

/**
 *@desc 杨辉三角
 *@param n number
 */

generate = n => {
    const arr = []
    for (let i = 0; i <= n; i++) {
        const arr1 = [];
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
maxProfit = prices => {
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
        if (prices[i + 1] > prices[i])
            total += prices[i + 1] - prices[i]
    }
    return total
}
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
/**
 *@desc 斐波那契数列
 */
recursive = n => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return recursive(n - 1) + recursive(n - 2);
}
console.log(recursive(10))
