/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str: string): number {
  const MAX_NUMBER = Math.pow(2, 31) - 1
  const MIN_NUMBER = -Math.pow(2, 31)
  const queue: string[] = []
  let num:string = ''
  let result: number
  let s = str.trim()
  for (let i of s) {
    if (i === '-') {
      queue.push(i)
    }
    if (i === ' ') {
      continue
    }
    if (!isNaN(Number(i))) {
      queue.push(i)
    }
  }
  
  if (queue.length === 0) {
    return 0
  }

  for (let i of queue) {
    num += i
  }
  result = Number(num)

  console.log(queue)
  if (result > MAX_NUMBER) {
    return MAX_NUMBER
  } else if (result < MIN_NUMBER) {
    return MIN_NUMBER
  } else {
    return result
  }
}

let a = "words and 987"
myAtoi(a)