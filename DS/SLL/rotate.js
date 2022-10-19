let { arrToLL } = require('./index');

/**
 * https://leetcode.com/problems/rotate-list/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || k === 0) return head;
  if (!head.next) return head;

  let count = 0;
  let size = 0;
  let newHead = null;
  let curTail = null;
  dfs(head);
  if (k % size === 0) return head;
  
  curTail.next = head;
  return newHead;

  function dfs (node) {
    size++;
    if (node.next) node.next = dfs(node.next);
    else curTail = node;
    count++;
    if (k % size === count) {
      newHead = node;
      return null;
    }
    return node;
  }
};

console.log(rotateRight(arrToLL([2,1,3,5,6]), 3));