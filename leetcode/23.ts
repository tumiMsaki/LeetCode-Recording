/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists: ListNode[]): ListNode {
  if (!lists[0]) return null
  let len = lists.length
  let newList = new ListNode(0)
  let current = newList
  let index = 0
  let num = lists[0].val
  while (lists.length > 0) {
    for (let i = 0; i < len; i++) {
      if (num >= lists[i].val) {
        num = lists[i].val
        index = i
      }
    }
    current.next = new ListNode(lists[index].val)
    current = current.next
    if (lists[index].next) {
      lists[index] = lists[index].next
    } else {
      lists.splice(index, 1)
    }
  }
  return newList.next
}