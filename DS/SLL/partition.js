let { arrToLL } = require('./index');

/**
 * https://leetcode.com/problems/partition-list/
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head || !head.next) return head;
  let curTail = null, secondHalf = null;
  newHead = dfs(head, x);
  if (!curTail) return secondHalf;
  curTail.next = secondHalf;
  return newHead;

  function dfs (currentNode, x) {
    if (currentNode.next) currentNode.next = dfs (currentNode.next, x);
    if (currentNode.val >= x) {
      let temp = currentNode.next;
      currentNode.next = secondHalf;
      secondHalf = currentNode;
      return temp;
    } else {
      if (curTail === null) curTail = currentNode;
      return currentNode;
    }
  }
};


// console.log(partition(arrToLL([11,5,7,1,15]), 7)); // 5,1,11,7,15
// console.log(partition(arrToLL([]), 7)); // []
// console.log(partition(arrToLL([1]), 7)); // 1
// console.log(partition(arrToLL([7,1]), 7)); // 1,7
console.log(partition(arrToLL([1,1]), 0)); // 1,1
console.log(partition(arrToLL([1,2]), 0)); // 1,2