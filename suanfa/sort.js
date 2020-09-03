//快排
function quickSort (array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array.splice(pivotIndex, 1)[0];
    const left = [],
        right = [];
    array.forEach((item) => {
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    });
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 原地快排 不占额外空间 原地交换数据完成
function quickSort1 (array, low = 0, hight = array.length - 1) {
    if (low >= hight) {
        return
    }
    let left = low
    right = hight
    flag = array[left]
    while (left < right) {
        if (left < right && flag <= array[right]) {
            right--
        }
        array[left] = array[right]
        if (left < right && flag >= array[left]) {
            left++
        }
        array[right] = array[left]
    }
    array[left] = flag
    quickSort1(array, low, left - 1)
    quickSort1(array, left + 1, hight)
    return array
}

const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort1(arr));
console.log(quickSort(arr));
//螺旋数组
function spiralArray (n) {
    let m = 0;
    let a = 1;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = n * n; //当n为奇数时，下面的循环无法给中间的项赋值，所以初始为n*n
        }
    }

    while (m < n / 2) {
        //向右赋值
        for (let i = m; i < n - m - 1; i++) {
            arr[m][i] = a++;
        }
        //向下赋值
        for (let i = m; i < n - m - 1; i++) {
            arr[i][n - m - 1] = a++;
        }
        //向左赋值
        for (let i = m; i < n - m - 1; i++) {
            arr[n - m - 1][n - i - 1] = a++;
        }
        //向上赋值
        for (let i = m; i < n - m - 1; i++) {
            arr[n - i - 1][m] = a++;
        }
        m = m + 1; //m=0时为最外圈赋值，每循环一次进行缩圈，则m+1
    }
    return arr;
}

// console.log(spiralArray(3));
// console.log(spiralArray(6));

// const arr = [
//     { answer: 0, questionId: 6 },
//     { answer: 1, questionId: 8 },
//     { answer: 1, questionId: 7 },
//   ];
//   const newArr = [];
//   arr.forEach((item) => {
//     return newArr.push(Object.values(item));
//   });
//   console.log(newArr);
// 函数柯理化
