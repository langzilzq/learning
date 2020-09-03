// input
// 4 1 2 3 4
// 5 1 2 3 4 5
// output
// 10
// 15
while (lineNum = readline()) {
    const line = lineNum.split(' ')
    const total = parseInt(line[0])
    if (!total) break
    let sum = -total
    line.forEach(item => {
        sum += parseInt(item)
    });
    print(sum)
}

// input
// 2
// 4 1 2 3 4
// 5 1 2 3 4 5
// output
// 10
// 15
const count = parseInt(readline())
for (let i = 0; i < count; i++) {
    const line = readline().split(' ')
    const total = parseInt(line[0])
    if (!total) break
    let sum = -total
    line.forEach(item => {
        sum += parseInt(item)
    });
    print(sum)
}
// 输入
// 5
// c d a bb e
// 输出
// a bb c d e
const len = readline()
const strArr = readline().split(' ')
print(strArr.sort().join(' '))

// 输入
// a c bb
// f dddd
// nowcoder
// 输出
// a bb c
// dddd f
// nowcoder
while (strArr = readline()) {
    print(strArr.split(' ').sort().join(' '))
}

// 输入
// a,c,bb
// f,dddd
// nowcoder
// 输出
// a,bb,c
// dddd,f
// nowcoder
while (strArr = readline()) {
    print(strArr.split(',').sort().join(','))
}