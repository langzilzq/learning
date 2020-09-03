// function test(age,name,sex) {
function test() {
    let s = '';
    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i] + ' '
    }
    return s
}

console.log(test('name', 'age', '1'))
