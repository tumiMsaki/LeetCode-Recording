/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m: number, n: number): number{
  let arr: Array<number> = []
  arr.length = 10
  arr.fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] += arr[j-1]
    }
  }
  return arr[-1]
}; 

console.log(uniquePaths(3, 4))