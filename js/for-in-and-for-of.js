const str = '[()]'

for (const i of str) {
  console.log(i)
}

for (const i in str) {
  console.log(i)
}

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
  console.log(i)
}

for (const i in arr) {
  console.log(i)
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

for (const i in obj) {
  console.log(i)
}
