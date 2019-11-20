function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1: any, l2: any): any {
  let p1 = l1
  let p2 = l2
  let carry = 0
  const res = new ListNode(0)
  let current = res
  while(p1 || p2 || carry) {
    const num1 = p1 ? p1.val : 0
    const num2 = p2 ? p2.val : 0
    const sum = num1 + num2 + carry
    if (sum > 9) {
      current.next = new ListNode(sum % 10)
      carry = 1
    } else {
      current.next = new ListNode(sum)
      carry = 0
    }
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    current = current.next
  }
  return res.next
}
