class LiNode {
  val: number | string
  next: LiNode
  constructor(val: number | string) {
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head: LiNode ): LiNode {
  let pre = null
  let current = head
  while (current) {
    let temp = current.next
    current.next = pre
    pre = current
    current = temp
  }
  return pre
}
