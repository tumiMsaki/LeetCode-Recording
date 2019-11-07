## 数据结构基础回顾——“队列”

队列和栈一样，是一种计算受到限制的结构，对拿和取有着严格的要求，与栈不同的是队列采取的存取方式是FIFO(first in first out)，通常，我们称数据进入的一端为**“队尾”**，而数据弹出的一端为**“队头”**，整个过程叫做**“入队”**和**“出队”**。

通常，队列储存结构的实现有两种方式：

+ 顺序队列
+ 链队列

顺序队列是最简单的队列实现方式，我们只需要使用顺序表并按照队列的定义原则操作数据，就可以实现顺序队列。

```typescript
class Queue {
  items: any[]
  constructor(items) {
    this.items = items || []
  }

  enqueue(element: any){
    this.items.push(element)
  }

  dequeue(){
    return this.items.shift()
  }

  front(){
    return this.items[0]
  }

  clear(){
    this.items = []
  }

  get size(){
    return this.items.length
  }

  get isEmpty(){
    return !this.items.length
  }
}
```

以来我们就实现了一个队列的类

但是顺序队列适用会对整体内存优化并不友好，比如在之前使用的内存在数据弹出之后会导致内存的浪费，在内存需要自己申请内存空间的语言中不断的入队还会导致益处。

因此我们还可以对我们的队列进行扩展，使其有更多的适用环境，**循环队列**

而实现的原理很简单，我们只需要将队列的首位相连，就实现了我们的循环队列

```typescript
class LoopQueue extends Queue {

  constructor(items) {
    super(items)
  }

  getIndex(index: number) {
    const length = this.items.length
    return index > length ? (index % length) : index
  }

  find(index: number) {
    return !this.isEmpty ? this.items[this.getIndex(index)] : null
  }
}
```



而队列实现的另一种方式是**链表队列**，链表队列的思想基本和顺序队列相同，只是只用了链表的方式。

```typescript
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
    while(current.next) {
    current = current.next
    }
    current.next = node
    this.length++
  }

  dequeue() {
    let current = null
    while(current.next) {
    current = current.next
    }
    current.next = null
    this.length--
  }

  front(){
    return this.head
  }

  get isEmpty() {
    return !this.length
  }

  get size() {
    return this.length
  }
}
```

**优先队列**：普通的队列具有先进先出的特性，元素追加在队尾，如果删除的话，从队头删除。而在优先队列中，队列中的数据被赋予了优先级。当访问元素时，优先级最高的会先被删除。所以说优先队列是最高级数据先出。

```typescript
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
```

