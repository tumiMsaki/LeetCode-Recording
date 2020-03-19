/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root: TreeNode, k: number): number {
  kthSmallest(root.right, k)
  console.log(root.val)
  kthSmallest(root.left, k)
  return
};