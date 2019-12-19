/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums: number[]): number {
  let ans = 0;
  for(const num of nums) {
      ans ^= num;
  }
  return ans;
}

console.log(singleNumber([2,2,1]))