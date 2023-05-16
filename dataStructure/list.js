function node(data) {
  this.data = data
  this.next = null
}

class SingleList {
  constructor() {
    this.head = null
    this.size = 0
  }
  unshift(value) {
    let newNode = new node(value)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }
  append(value) {
    if (!this.head) {
      this.head = new node(value)
    } else {
      const current = this.findLast()
      current.next = new node(value)
    }
    this.size++
  }
  findLast() {
    let currNode = this.head

    while (currNode.next) {
      currNode = currNode.next
    }

    return currNode
  }
  display() {
    let result = ''
    let currNode = this.head

    while (currNode) {
      result += currNode.data
      currNode = currNode.next
      if (currNode) {
        result += '->'
      }
    }

    return result
  }

  reverseList() {
    let res = null
    let next = null
    let current = this.head

    while (current) {
      next = current.next
      current.next = res
      res = current
      current = next
    }

    this.head = res
  }
  getSize() {
    return this.size
  }
}

let myList = new SingleList()
let arr = [3, 4, 5, 6, 7, 8, 9]

for (let i of arr) {
  myList.append(i)
}

// console.log(myList.findLast())
// console.log(myList.display())
// console.log(myList.getSize())
// myList.unshift(1)

console.log(myList.display())
myList.reverseList()
console.log(myList.display())
