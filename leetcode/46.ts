/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums: number[]):number[][] {
  let n = nums.length;
  let res: number[][] = [];
  let tmpPath: number[] = [];
  let backtrack = (tmpPath: number[]) => {
      if(tmpPath.length == n){
          res.push(tmpPath);
          return;
      }
      for(let i = 0;i < n;i++){
          if(!tmpPath.includes(nums[i])){
              tmpPath.push(nums[i]);
              backtrack(tmpPath.slice());
              tmpPath.pop();
          }
      }
  }
  backtrack(tmpPath);
  return res;
}