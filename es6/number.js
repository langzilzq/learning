// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

// Number.isNaN()用来检查一个值是否为NaN。
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9 / NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true

// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45
// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

// Number.isInteger()用来判断一个数值是否为整数。
// JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false

// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
Math.pow(2, 53) // 9007199254740992
Math.pow(2, 53) === Math.pow(2, 53) + 1 // true

Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true

Math.trunc('4.2')//4

Math.sign(5) //1
Math.sign(-1) //-1

Math.sqrt(4)//2
Math.cbrt(8)// 2

