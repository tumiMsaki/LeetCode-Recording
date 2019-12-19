class TreeNode {
  val: string | number
  left: TreeNode
  right: TreeNode
  constructor(val: string | number) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
  return
};