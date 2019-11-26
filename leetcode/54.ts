/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix: number[][]): number[] {
  let result: number[] = []
  if (matrix.length === 0) return result

  let c1 = 0,
      c2 = matrix[0].length - 1,
      r1 = 0,
      r2 = matrix.length - 1
  
  while (c1 <= c2 && r1 <= r2) {
    for (let c = c1; c <= c2; c++) {
      console.log(1)
      result.push(matrix[r1][c])
    }
    for (let r = r1 + 1; r <= r2; r++) {
      console.log(2)
      result.push(matrix[r][c2])
    }
    if (c1 < c2 && r1 < r2) {
      for (let c = c2 - 1; c > c1; c--) {
        console.log(3)
        result.push(matrix[r2][c])
      }
      for (let r = r2; r > r1; r--) {
        console.log(4)
        result.push(matrix[r][c1])
      }
    }
    r1++
    r2--
    c1++
    c2--
  }
  return result
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
