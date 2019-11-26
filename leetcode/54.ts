/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix: number[][]): number[] {
  if (matrix.length === 0 || matrix[0].length === 0) return []
  let arr = []
  let m = matrix[0].length // 1
  let n = matrix.length // 2
  let count = m * n
  let index = 0
  let max = Math.min(m, n)
  while (index <= max) {
    for (let i = index; i < m - index; i++) {
      arr.push(matrix[index][i])
    }
    for (let i = index + 1; i < n - index - 1; i++) {
      arr.push(matrix[i][m - index - 1])
    }
    if (arr.length > count - 1 ) {
      return arr
    }
    for (let i = m - index - 1; i >= index; i--) {
      arr.push(matrix[n - index - 1][i])
    }
    if (arr.length > count - 1 ) {
      return arr
    }
    for (let i = n - index - 2; i > index; i--) {
      arr.push(matrix[i][index])
    }
    index ++
  }
  return arr
}

console.log(spiralOrder([[7],[9],[6]]))
