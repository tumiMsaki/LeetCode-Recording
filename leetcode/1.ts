/** 两数相加
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums: number[], target: number):number[] {
    let result = {}
    for (let i = 0, len = nums.length; i < len; i++) {
      let diff = target - nums[i]
      if (result[diff] !== undefined) {
        return [result[diff], i]
      }
      result[nums[i]] = i
    }
};