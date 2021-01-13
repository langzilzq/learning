// 两栏布局
// js获取元素宽高 node.offsetWidth node.offsetHeight
// wangyi.htm
// 判断类型

// 闭包实现 银行叫号
function add(number = 0) {
  return function () {
    return ++number
  }
}
const fn = add()
console.log(fn())
console.log(fn())

/**
 * 防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。代码实现重在清零 clearTimeout
 * 节流：控制流量，单位时间内事件只能触发一次，如果服务器端的限流即 Rate Limit。代码实现重在开锁关锁 timer=timeout; timer=null
 */
/**
 * @desc 函数防抖
 * @param f function
 * @param wait 延迟执行毫秒数
 * @param immediate 是否立即执行
 * 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
 * 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
 * 文本编辑器实时保存，当无任何更改操作一秒后进行保存
 */
function debounce(f, wait, immediate = false) {
  let timeout
  return () => {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) f(...arguments)
    } else {
      timeout = setTimeout(function () {
        f(...arguments)
      }, wait)
    }
  }
}

/**
   * @desc 函数节流
   * @param f function
   * @param wait 延迟执行毫秒数
   * onscroll事件，每隔一秒计算一次位置信息等
   浏览器播放事件，每个一秒计算一次进度信息等
   input 框实时搜索并发送请求展示下拉列表，没隔一秒发送一次请求 (也可做防抖)
   */
function throttle(f, wait) {
  let timer
  return (...args) => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      f(...args)
      timer = null
    }, wait)
  }
}
