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
      this.length++
    } else {
      let newNode = new lNode(element)
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
      this.length++
    }
  }

  insert(position: number, element: T): void {
    if (position > this.length || position < 0) return null
    let newNode = new lNode(element)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
      this.length++
    } else if (this.length === 0) {
      this.head = newNode
      this.length++
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
      this.length++
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
    if (position > this.length || position <= 0) return null
    let current = this.head 
    while (position > 0) {
      current = current.next
      position --
    }
    current.data = element
  }

  remove(element: T): void {
    if (this.head.data === element) {
      this.head = this.head.next
    } else {
      let current = this.head
      let previous = null
      while (current) {
        if (current.data === element) {
          break
        }
        previous = current
        current = current.next
      }
      previous.next = current
    }
    this.length --
  }

  removeAt(position: number): void {
    
  }

  size(): number {
    let index = 0
    let current = this.head
    while(current) {
      index ++
      current = current.next
    }
    return index
  }

  isEmpty(): boolean {
    if (this.length === 0) {
      return true
    } else {
      return false
    }
  }

  clear(): void {
    this.head = new lNode<T>(null)
    this.length = 0
  }

  show(): void {
    let current = this.head
    let index = 0
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

let linkedList = new Linkedlist()

linkedList.append("a")
linkedList.append("b")
linkedList.insert(1, "g")
linkedList.insert(0, "aa")
linkedList.updata(0, "ssss")
linkedList.show()
