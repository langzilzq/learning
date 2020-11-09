// 字符串历遍
const str = 'hello world'
for (let s of str) {
    console.log(s)
}
// 模板字符串
console.log(`${str} again`)

console.log(str.startsWith('hello'))
console.log(str.endsWith('d'))
console.log(str.includes('llo'))

console.log(str.startsWith('world',6))
console.log(str.endsWith('hello',5))
console.log(str.includes('llo',2))

console.log(str.repeat(2))

const numStr='00001'

console.log(numStr.padStart(8,0))
console.log(numStr.padEnd(8,0))
console.log(numStr.padStart(8))

const trim='  ai  '
console.log(trim.trimStart())
console.log(trim.trimEnd())
console.log(trim.trim())
