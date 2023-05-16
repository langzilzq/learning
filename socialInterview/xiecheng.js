// second round
function stringify(obj) {
  switch (typeof obj) {
    case 'string':
      return `"${obj}"`
    case 'number':
      return obj.toString()
    case 'boolean':
      return obj ? 'true' : 'false'
    case 'undefined':
      return 'undefined'
    case 'object':
      if (obj === null) {
        return 'null'
      } else if (Array.isArray(obj)) {
        return `[${obj.map(stringify).join(',')}]`
      } else {
        var str = ''
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            str += `"${key}":${stringify(obj[key])},`
          }
        }
        return `{${str.slice(0, -1)}}`
      }
    default:
      return ''
  }
}

const value = {
  a: { c: 1 },
  b: 2,
  c: [1, 23],
}
console.log(JSON.stringify(value))
console.log(myStringigy(value))
