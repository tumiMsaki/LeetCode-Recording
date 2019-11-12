class dNode<T> {
  data: T
  next: dNode<T>
  pre: lNode<T>
  constructor(value: T) {
    this.data = value
    this.next = null
    this.pre = null
  }
}

class doublyLinkedList<T> implements IList<T> {
  head: dNode<T>
  tail: dNode<T>
  length: number
  constructor() {
    this.head = new dNode<T>(null)
    this.tail = new dNode<T>(null)
    this.length = 0
  }
  append(element: T): void {
    let newNode = new dNode(element)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
    this.tail.pre = newNode
    this.length += 1
  }
  insert(position: number, element: T): void {
    if (position < 0 || position > this.length) return null
    let newNode = new dNode(element)
    if (position = 0) {
      this.head.pre = newNode
      newNode.next = this.head
      this.head = newNode
    }
    let current = this.head
    let previous = null
    while (position > 0) {
      
      position --
    }
    this.length += 1
  }
  get(element: T): void {}
  indexOf(position: number): T {
    return
  }
  updata(position: number, element: T): void {}
  remove(element: T): void {}
  removeAt(position: number): void {}
  size(): number {
    return
  }
  isEmpty(): boolean {
    return
  }
  clear(): void {}
  show(): void {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}
