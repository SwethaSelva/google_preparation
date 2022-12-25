/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head;

  let length = 0;
  for (let curNode = head; curNode; curNode = curNode.next) length++;

  let curNode = head;
  let resultHead = { next: null };
  let restList = resultHead;
  let iterationCount = Math.floor(length / k);
  while (curNode && iterationCount > 0) {
    let [start, end] = reverseNodes(curNode, k);
    restList.next = start;

    restList = curNode;
    curNode = end.next;
    iterationCount--;
  }
  return JSON.stringify(resultHead.next);
};

function reverseNodes(head, k) {
  let resultHead = head;
  let currentNode = head;
  let nextNode = currentNode.next;

  while (nextNode && k > 1) {
    currentNode.next = nextNode.next;
    nextNode.next = resultHead;

    resultHead = nextNode;
    nextNode = currentNode.next;
    k--;
  }
  return [resultHead, head];
}

let arrToLL = require('./index');
console.log(reverseKGroup(arrToLL([4,3,6,5,7]), 2));
console.log(reverseKGroup(arrToLL([5,4,3,8,7,6,9,10]), 3));