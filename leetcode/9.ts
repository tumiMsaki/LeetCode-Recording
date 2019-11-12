/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x: number): boolean {
  let str = x.toString()
  let arr = []
  let cStr = ''
  for (let i of str) {
    arr.unshift(i)
  }
  for (let i of arr) {
    cStr += i
  }
  if (str === cStr) {
    return true
  }
  return false
}

console.log(isPalindrome(123))
