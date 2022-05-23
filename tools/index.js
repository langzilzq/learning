function rgbaToHexadecimal(color) {
  const values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',')
  const a = parseFloat(values[3] || 1),
    r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
    g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
    b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)
  return '#' + ('0' + r.toString(16)).slice(-2) + ('0' + g.toString(16)).slice(-2) + ('0' + b.toString(16)).slice(-2)
}

console.log(rgbaToHexadecimal('rgba(255, 255, 255, 0.1)'))

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

console.log(RGBA2RGB('rgba(255, 255, 255, 0.1)'))
