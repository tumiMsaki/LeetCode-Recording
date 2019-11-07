class Stack {
  items: any[]
  constructor() {
    this.items = []
  }

  push(element: any) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  get top() {
    return this.items[this.items.length - 1]
  }

  get isEmpty() {
    return !this.items.length
  }

  get size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  print() {
    console.log(this.items.toString())
  }
}
