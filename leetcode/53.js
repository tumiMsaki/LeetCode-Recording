/** 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  for(let num of nums) {
    if(sum + num > num ){
      sum = sum + num;
    } else {
      sum = num;
    }
    max = Math.max(max, sum);
  };
  return max;
};