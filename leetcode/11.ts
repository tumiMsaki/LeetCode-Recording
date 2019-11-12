/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height: number[]):number {
  let right = 0
  let left = height.length - 1
  let rightSize = height[right]
  let leftSize = height[left]
  let water = 0
  let Size = height.length - 1
  while (right < left) {
    if (rightSize >= leftSize) {
      water = Math.max(Size * leftSize, water)
      left --
      leftSize = height[left]
      Size --
    } else {
      water = Math.max(Size * rightSize, water)
      right ++
      rightSize = height[right]
      Size --
    }
  }
  return water
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))