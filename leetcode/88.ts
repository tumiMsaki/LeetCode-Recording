/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let p = m + n - 1
  let p1 = m - 1
  let p2 = n - 1
  while (p2 >= 0 && p1 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
    console.log(nums1, p1, p2)
  }

  for (let i = 0; i <= p2; i++) {
    nums1[i] = nums2[i]
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
