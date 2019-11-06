/**
 * 数组实现方式
 */
class Queue {
  items: any[]
  constructor(items) {
    this.items = items || []
  }

  enqueue(element: any) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return !this.items.length
  }
}

class LoopQueue extends Queue {
  constructor(items) {
    super(items)
  }

  getIndex(index: number) {
    const length = this.items.length
    return index > length ? index % length : index
  }

  find(index: number) {
    return !this.isEmpty ? this.items[this.getIndex(index)] : null
  }
}
/**
 * 链表队列
 */
class QNode {
  element: string | number
  next: object
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  head: object
  length: number
  constructor() {
    this.head = null
    this.length = 0
  }

  enqueue(element: string | number) {
    const node = new QNode(element)
    let current = null
    while (current.next) {
      current = current.next
    }
    current.next = node
    this.length++
  }

  dequeue() {
    let current = null
    while (current.next) {
      current = current.next
    }
    current.next = null
    this.length--
  }

  front() {
    return this.head
  }

  get isEmpty() {
    return !this.length
  }

  get size() {
    return this.length
  }
}

/**
 * 优先队列
 */
class PriorityQueue {
  items: any[]
  constructor() {
    this.items = []
  }

  enqueue(element: any, priority: number) {
    const queueElement = { element, priority }
    if (this.isEmpty) {
      this.items.push(queueElement)
    } else {
      const preIndex = this.items.findIndex(
        item => queueElement.priority < item.priority
      )
      if (preIndex > -1) {
        this.items.splice(preIndex, 0, queueElement)
      } else {
        this.items.push(queueElement)
      }
    }
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return !this.items.length
  }
}
