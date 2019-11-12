interface IList<T> {
  append(element: T): void
  insert(position: number, element: T): void
  get(position: number): T
  indexOf(element: T): number
  updata(position: number, element: T): void
  remove(element: T): void
  removeAt(position: number): void
  size(): number
  isEmpty(): boolean
  clear(): void
  show(): void
}

class dNode<T> {
  data: T
  next: dNode<T>
  pre: dNode<T>
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
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  insert(position: number, element: T): void {
    if (position < 0 || position > this.length) return null
    let newNode = new dNode(element)
    if (position === 0) {
      this.head.pre = newNode
      newNode.next = this.head
      this.head = newNode
      this.length += 1
    } else if (this.length === 0 || position === this.length) {
      this.append(element)
    } else {
      let current = this.head
      let previous = null
      while (position > 0) {
        previous = current
        current = current.next
        position--
      }
      current.pre = newNode
      newNode.next = current
      previous.next = newNode
      newNode.pre = previous
      this.length += 1
    }
  }

  get(position: number): T {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    while (position > 0) {
      current = current.next
      position --
    }
    return current.data
  }

  indexOf(element: T): number {
    let index = 0
    let current = this.head
    while (current) {
      if (current.data === element) {
        return index
      }
      current = current.next
      index ++
    }
    return -1
  }

  updata(position: number, element: T): void {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    while (position > 0) {
      current = current.next
      position --
    }
    current.data = element
  }

  remove(element: T): void {
    let current = this.head
    let previous = null
    if (current.data === element) {
      this.head = this.head.next
    } else {
      while (current) {
        if (current.data === element) {
          previous.next = current.next
          break
        }
        previous = current
        current = current.next
      }
    }
    return null
  }

  removeAt(position: number): void {
    let data = this.get(position)
    this.remove(data)
  }

  size(): number {
     return this.length
  }

  isEmpty(): boolean {
    if (this.length === 0) {
      return true
    } else {
      return false
    }
  }

  clear(): void {
    this.head = new dNode<T>(null)
    this.tail = new dNode<T>(null)
  }

  show(): void {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

let doublyList = new doublyLinkedList()
doublyList.append("a")
doublyList.append("b")
doublyList.insert(2, "c")
doublyList.removeAt(2)

