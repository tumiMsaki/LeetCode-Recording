/** 爬楼梯 递归方式
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
      return 1
    }
    if (n === 2) {
      return 2
    }
    return climbStairs(n - 1) + climbStairs(n - 2)
};


console.log(climbStairs(10))

/** 爬楼梯 非递归
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let pre = 1
  let preT = 2
  let current = 0
  for (let i = 2; i < n; i++) {
    current = pre + preT
    pre = preT
    preT = current
  }
  return current
};


console.log(climbStairs(10))