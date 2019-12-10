class ListNode {
  val: number
  next: ListNode
  constructor(val: number) {
    this.val = val 
    this.next = null
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node: ListNode): void {
  node.val = node.next.val
  node.next = node.next.next
};