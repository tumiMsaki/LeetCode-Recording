interface IList<T> {
  append(element: T): void
  insert(position: number, element: T): void
  get(element: T): void
  indexOf(position: T): number
  updata(position: number): void
  remove(element: T): void
  removeAt(position: number): void
  size(): number
  isEmpty(): boolean
  clear(): void
  show(): void
}

class lNode<T> {
  data: T
  next: lNode<T>
  constructor(value: T) {
    this.data = value
    this.next = null
  }
}

class Linkedlist<T> implements IList<T> {
  head: lNode<T>
  length: number
  constructor() {
    this.head = new lNode<T>(null)
    this.length = 0
  }

  append(element: T): void {
    if (this.length == 0) {
      let newNode = new lNode(element)
      this.head = newNode
      this.length ++
    } else {
      let newNode = new lNode(element)
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
      this.length ++
    }
  }

  insert(position: number, element: T): void {
    if (position > this.length || position < 0) return null
    let newNode = new lNode(element)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else if (this.length === 0) {
      this.head = newNode
      this.length ++
    } else {
      let current = this.head
      let previous = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
      this.length ++
    }
  }

  get(element: T): void {}

  indexOf(position: T): number {
    return
  }

  updata(position: number): void {}

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
    let index = 0
    while(current) {
      console.log(current.data)
      current = current.next
    }
  }
}

let linkedList = new Linkedlist()

linkedList.append('a')
linkedList.append('b')
linkedList.insert(1,'g')
linkedList.insert(0,'aa')

linkedList.show()
