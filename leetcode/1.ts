interface Iresult {
  [propName: number]: number
}
/** 两数相加
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums: number[], target: number): number[] {
  let arr: number[] = []
  for (let i = 0, len = nums.length; i < len; i++) {
    let diff = target - nums[i]
    if (arr[diff] !== undefined) {
      return [arr[diff], i]
    }
    arr[nums[i]] = i
  }
  return
}
