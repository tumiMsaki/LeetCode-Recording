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
var detectCycle = function(head: any) {
  let current = head
  let hashMap = new Set()
  while (current) {
    if (hashMap.has(current)) {
      return current
    }
    hashMap.add(current)
    current = current.next 
  }
  return null
};