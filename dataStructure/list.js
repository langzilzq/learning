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

function reverseList(list) {
  let curr = list.head
  let prev = null
  let next = null

  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  list.head = prev
}
reverseList(myList)
console.log(myList.display())
