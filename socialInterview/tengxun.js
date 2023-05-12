// first
const checkOneResult = async allCheckRules => {
  const targetCheckResult = {
    valid: true,
  }

  const results = await Promise.all(allCheckRules)
  if (!results.every(res => res.valid)) {
    targetCheckResult.valid = false
  }

  return targetCheckResult
}

const sortData = data => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].age > data[j].age || (data[i].age === data[j].age && data[i].name > data[j].name)) {
        const temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }

  return data
}

const bigSum = (a, b) => {
  let calutaleNum = 0
  let carryNum = 0
  let sum = ''
  let maxLength = Math.max(a.length, b.length)
  a = a.padStart(maxLength, '0')
  b = b.padStart(maxLength, '0')

  for (let i = maxLength - 1; i >= 0; i--) {
    calutaleNum = parseInt(a[i]) + parseInt(b[i]) + carryNum
    carryNum = Math.floor(calutaleNum / 10)
    sum = (calutaleNum % 10) + sum
  }
  if (carryNum > 0) {
    sum = String(carryNum) + sum
  }
  return sum
}

console.log(bigSum('99999999', '9999'))

const deepClone = (target, map = new WeakMap()) => {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}
