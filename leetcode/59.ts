/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n: number): number[][] {
  let result = []
  let r1 = 0
  let r2 = n - 1
  let c1 = 0
  let c2 = n - 1
  for (let i = 0; i < n; i++) {
    result[i] = []
    for (let j = 0; j < n; j++) {
      result[i][j] = 1
    }
  }
  let count = 1
  while (count <= n*n) {
    for (let c = c1; c <= c2; c++) {
      result[r1][c] = count
      count++
    }
    for (let r = r1 + 1; r <= r2; r++) {
      result[r][c2] = count
      count++
    }
    for (let c = c2 - 1; c > c1; c--) {
      result[r2][c] = count
      count++
    }
    for (let r = r2; r > r1; r--) {
      result[r][c1] = count
      count++
    }
    r1++
    r2--
    c1++
    c2--
  }
  return result
}


console.log(generateMatrix(3))
