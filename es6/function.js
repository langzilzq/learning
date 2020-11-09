// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add(...values) {
    let sum = 0;
    console.log(values)
    for (let val of values) {
        sum += val;
    }
    return sum;
}

add(2, 5, 3) // 10

// 箭头函数

// ES2019 对函数实例的toString()方法做出了修改。
// toString()方法返回函数代码本身，以前会省略注释和空格。
console.log(add.toString())


