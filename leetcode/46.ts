/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums: number[]): number[][] {
  let ws = []
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0, wsLen = ws.length; j < wsLen; j++) {
      ws.push()
    }
  }
  return
};