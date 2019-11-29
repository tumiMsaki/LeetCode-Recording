/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums: number[]): number {
  let len = nums.length
  let index = 0
  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[index]) {
      continue
    }
    let temp = nums[i]
    nums[i] = nums[index + 1]
    nums[index + 1] = temp
    index++
  }
  return index + 1
}

console.log(removeDuplicates([1,1,2]))