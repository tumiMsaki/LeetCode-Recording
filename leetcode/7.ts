/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x: number): number {
  const MAX_NUMBER = Math.pow(2, 31) - 1
  const MIN_NUMBER = -Math.pow(2, 31)
  let isNegative = x < 0
  if (isNegative) {
    x = -x
  }
  let a = 0
  while (x > 9) {
    a = a * 10 + (x % 10) * 10
    x = parseInt(x / 10)
  }
  a += x
  if (a > MAX_NUMBER || a < MIN_NUMBER) {
    return 0
  }
  return a
}

console.log(reverse(321))