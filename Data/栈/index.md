## 数据结构基础回顾——“栈”

栈一种计算受到限制的数据结构，通常所说的栈有两种含义，以下内容以JavaScript作为🌰

+ **数据的存放方式** 

  ​	可以将栈想想成一个木桶，先放入的物品将被压在下面；因此，先放入的数据将被后取出，也就是经常说的LIFO（last in,  first out）。

  同时这种数据结构有几种方法：

  ```
  isempty 	查看栈是否为空
  top 	查看最栈顶的元素
  push 	将元素放到栈的顶部
  pop 	将栈顶的元素取出
  ```

  ```typescript
  class Stack {
    stack: any[]
    constructor(stack: any[]) {
      this.stack= stack
    }
  
    push(element: any) {
      this.stack.push(element)
    }
  
    pop(element: any) {
      return this.stack.pop()
    }
  
    top() {
      return this.stack[this.stack.length - 1]
    }
  
    isempty() {
      return this.stack.length === 0
    }
  
  }
  ```

+ **代码的运行方式** （执行栈，或者说调用栈）

  ​	将函数压入执行上下文栈，每次取出最上面的一个函数执行并将其弹出

  ```javascript
  ECStack = []; //执行上下文栈
  ```

  ​	我们都知道在函数执行的过程中，在外层环境是全局环境，也就是global。因此这个执行栈的最先被压入的永远是global，最后被弹出的也是global。

  ​	当我们的函数执行在另一个函数内部时，js将会创建执行上下文栈，

  例如下面这个函数

  ```javascript
  function fn1() {
    fn2()
    console.log('fn1执行完了')
  }
  
  function fn2() {
    fn3()
    console.log('fn2执行完了')
  }
  
  function fn3() {
    console.log('fn3执行完了')
  }
  
  fn1()
  //fn3执行完了
  //fn2执行完了
  //fn1执行完了
  ```

  而执行过程就是之前所说的，函数在执行时会创建执行上下文栈，并依次将<code>fn1,fn2,fn3</code>压入执行栈中，并从最顶部开始弹出执行

  ```javascript
  //压入栈中
  ECStack.push(window)
  ECStack.push(fn1)
  ECStack.push(fn2)
  ECStack.push(fn3)
  
  //fn3执行完了
  ECStack.pop(fn3)
  //fn2执行完了
  ECStack.pop(fn2)
  //fn1执行完了
  ECStack.pop(fn1)
  ECStack.pop(window)
  
  ECStack.isempty() //true
  ```