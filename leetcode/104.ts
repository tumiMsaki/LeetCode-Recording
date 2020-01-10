/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root: TreeNode): number{
  if (!root) return 0
  if (!root.left && !root.right) return 1
  let count = 1
  count += Math.max(maxDepth(root.left), maxDepth(root.right))
  return count
};