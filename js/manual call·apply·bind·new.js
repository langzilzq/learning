Function.prototype.myCall = function (context) {
    //设置默认参数为window
    const con = context || window;
    //给新对象添加方法fn
    //getValue.call(a,1,2) =>  a.fn = getValue
    //此处this.指向调用myCall的对象
    con.fn = this
    //取出除第一个以外的参数
    const args = [...arguments].slice(1)
    const result = con.fn(...args)
    delete con.fn
    return result
}
Function.prototype.myApply = function (context) {
    const con = context || window;
    con.fn = this
    //判断是否有参数
    const result = arguments[1] ? con.fn(...arguments[1]) : con.fn()
    delete con.fn
    return result
}
Function.prototype.myBind = function (context) {
    // if (typeof this !== 'function') {
    //     throw new TypeError('Error')
    // }
    const self = this
    const args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(context, args.concat(...arguments))
    }
}
function create() {
    // 创建一个空的对象
    let obj = {}
    // 获得构造函数
    let Con = [].shift.call(arguments)
    // 链接到原型
    obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}
const xm = {
    length: 16,
    todo(time = '30min') {
        return console.log(this.length + 'cm' + ' until ' + time)
    }
}
const xh = {
    length: 14
}
xm.todo()
xm.todo.myCall(xh, '30sec')
xm.todo.myApply(xh, ['30sec'])
xm.todo.myBind(xh, '30sec')()

