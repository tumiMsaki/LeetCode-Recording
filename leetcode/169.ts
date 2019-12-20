/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums: number[]): number {
  let hash = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1)
    } else {
      hash.set(nums[i], 1)
    }
    if (hash.get(nums[i]) > (len / 2)) return nums[i]
  }
};

console.log(majorityElement([3,2,3]))