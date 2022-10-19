let { arrToLL } = require('./index');
/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function(head, left, right) {
  if (!head || !head.next || left === right) return head;

  let curPos = 1;
  let curNode = head;
  let revHead = null;
  let revTail = null;
  let b4Rev = null;

  while (curNode) {
    let temp = curNode.next;
    if (curPos === left - 1) b4Rev = curNode;
    if (curPos === right+1) {
      revTail.next = curNode;
      break;
    }
    if (curPos >= left && curPos <= right) {
      if (!revTail) {
        curNode.next = null;
        revHead = curNode;
        revTail = curNode;
      } else {
        curNode.next = revHead;
        revHead = curNode;
      }
    }
    curNode = temp;
    curPos++;
  }
  if (left === 1) return revHead;
  b4Rev.next = revHead;
  return head;
};
console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5]), 2, 4)));
console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5]), 2, 5)));
console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5]), 1, 4)));
console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5]), 1, 5)));
console.log(JSON.stringify(reverseBetween(arrToLL([1,2]), 1, 2)));