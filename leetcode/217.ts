/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]): boolean {
  let set = [...new Set(nums)]
  if (set.length === nums.length) return false
  return true
};

console.log(containsDuplicate([1,3]))