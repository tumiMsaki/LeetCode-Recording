/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.item = []
    this.length = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x: number):void {
    this.item.unshift(x)
    this.length ++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function():void {
    this.item.shift()
    this.length --
};

/**
 * @return {number}
 */
MinStack.prototype.top = function():number {
  return this.item[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function():void {
  let min = this.item[0]
  for (let i = 0; i < this.length; i++) {
    if (this.item[i] < min) {
      min = this.item[i]
    }
  }
  return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */