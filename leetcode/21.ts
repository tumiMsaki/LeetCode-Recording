class LNode {
  val: number | string
  next: LNode
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
 * @param {LNode} l1
 * @param {LNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1: LNode, l2: LNode): LNode {
  let p1 = l1
  let p2 = l2
  const result = new LNode(0)
  let current = result
  while (p1 || p2) {
    if (p1 === null) {
      current.next = p2
      break
    }
    if (p2 === null) {
      current.next = p1
      break
    }

    if (p1.val < p2.val) {
      current.next = new LNode(p1.val)
      p1 = p1.next
    } else {
      current.next = new LNode(p2.val)
      p2 = p2.next
    }
  }
  return result.next
}
