function RGBA2RGB(rgba_color) {
  //注：rgba_color的格式为rgba(0,0,0,0.1)
  var BGcolur = 1
  var arr = rgba_color.split('(')[1].split(')')[0].split(',')
  var a = arr[3]
  var r = BGcolur * (1 - a) + arr[0] * a
  var g = BGcolur * (1 - a) + arr[1] * a
  var b = BGcolur * (1 - a) + arr[2] * a
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function set16ToRgb(str) {
  var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  if (!reg.test(str)) {
    return
  }
  let newStr = str.toLowerCase().replace(/\#/g, '')
  let len = newStr.length
  if (len == 3) {
    let t = ''
    for (var i = 0; i < len; i++) {
      t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1))
    }
    newStr = t
  }
  let arr = [] //将字符串分隔，两个两个的分隔
  for (var i = 0; i < 6; i = i + 2) {
    let s = newStr.slice(i, i + 2)
    arr.push(parseInt('0x' + s))
  }
  return 'rgb(' + arr.join(',') + ')'
}

console.log(set16ToRgb('#2DBBD4'))

console.log(RGBA2RGB('rgba(45,187,212, 0.13)'))
