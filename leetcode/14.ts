/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs: string[]):string {
  if (strs.length === 0) {
      return ""
  }
  if (strs[0].length === 0) {
      return ""
  }
  if (strs.length === 1) {
      return strs[0]
  }
  let arr: string[] = []
  let chunk:string = ''
  for (let i = 0, len = strs[0].length; i < len; i++) {
    let str = strs[0][i]
    for (let j = 1, len = strs.length; j < len; j++) {
      if (strs[j][i] === str) continue
      for (let count = 0, len = arr.length; count < len; count ++) {
        chunk += arr[count]
      }
      return chunk
    }
    arr.push(str)
  }
  for (let count = 0, len = arr.length; count < len; count ++) {
        chunk += arr[count]
      }
      return chunk
}