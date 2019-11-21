/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums: number[], target: number):number {
  const len = nums.length
  if (len < 3) {
    return null
  }
  nums.sort((a, b) => a - b)
  let res = target - (nums[0] + nums[1] + nums[2])
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1,
      right = len - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === target) {
        return sum
      } else if (sum < target) {
        while (nums[left] === nums[++left]);
      } else {
        while (nums[right] === nums[--right]);
      }
      if (Math.abs(sum - target) < Math.abs(res)) {
        res = target - sum
      }
    }
  }
  return target - res
}

console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82))
