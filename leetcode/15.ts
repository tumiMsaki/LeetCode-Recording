/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums: number[]):number[] {
  let arr: any[] = []
  let len = nums.length
  if (nums === null || len < 3) return arr
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while(L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        arr.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L ++
        while (L < R && nums[R] === nums[R - 1]) R --
        R --
        L ++
      }
      else if (sum < 0) L ++
      else if (sum > 0) R --
    }
  }
  return arr
};