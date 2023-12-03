/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head.next || !head.next.next) return head;

  let curHead = head;
  dfs(head);
  function dfs(curTail, prevTail = null) {
    if (!curTail) return curTail;

    if (
      dfs(curTail.next, curTail)
      || !curHead
      || curHead.next == curTail
      || curHead == curTail
    ) return head;

    let nextHead = curHead.next;

    if (prevTail) prevTail.next = null;
    curHead.next = curTail;
    curTail.next = nextHead;

    curHead = nextHead;
  }
};

let arrToLL = require('./index');
console.log(reorderList(arrToLL([1, 2, 3, 4])))
console.log(reorderList(arrToLL([1, 2, 3, 4, 5])))
console.log(reorderList(arrToLL([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
console.log(reorderList(arrToLL([1, 2, 3, 4, 5, 6, 7, 8, 9])))