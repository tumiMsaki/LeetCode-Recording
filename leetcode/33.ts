/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums: number[], target: number): number {
  if (nums.length < 1) return -1
  let left = 0
  let right = nums.length - 1 //6
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    console.log(mid)
    if (nums[mid] < nums[right]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } 
  }
  return -1
}

console.log(search([1,3],1))

//[4,5,6,7,0,1,2]
//[5,6,7,0,1,2,3]
//[6,7,0,1,2,3,4]
//[2,3,4,5,6,7,0]