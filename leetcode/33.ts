/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums: number[], target: number): number {
  if (nums.length < 1) return -1
  let left = 0
  let right = nums.length - 1 //6
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    console.log(mid)
    if (nums[mid] < nums[right]) {
      if (target > nums[mid] && target < nums[right]) {
        right = mid - 1
      } else {
        left = mid
      }
    } else {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid
      }
    } 
  }
  if (nums[left] !== target) {
    return -1
  }
  return left
}

console.log(search([2,3,4,5,6,7,0],0))

//[4,5,6,7,0,1,2]
//[5,6,7,0,1,2,3]
//[6,7,0,1,2,3,4]
//[2,3,4,5,6,7,0]