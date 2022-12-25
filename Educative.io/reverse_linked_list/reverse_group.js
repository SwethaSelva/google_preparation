/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function(head) {
  if (!head || !head.next) return head;

  let length = 0;
  for (let curNode = head; curNode; curNode = curNode.next) length++;

  let curNode = head;
  let prevNode = head;
  let curCount = 0;
  let group = 1;
  while (curNode) {
    // Handle last group
    if (length - curCount < group) group = length - curCount;
    if (group % 2 === 0) {
      let [startNode, endNode] = reverseNode(curNode, group);

      prevNode.next = startNode;
      prevNode = curNode;
      curNode = endNode.next;
      curCount += group;
      group++;
    } else {
      for (let counter = group; counter > 0 && curNode; counter--) {
        prevNode = curNode;
        curNode = curNode.next;
      }
      curCount += group;
      group++;
    }
  }
  return JSON.stringify(head);
};

function reverseNode (node, counter) {
  let curCounter = 1;
  let head = node;
  let cur = node; // stay
  let nextNode = cur.next;
  while (nextNode && curCounter < counter) {
    cur.next = nextNode.next;
    nextNode.next = head;

    head = nextNode;
    nextNode = cur.next;
    curCounter++;
  }
  return [head, node];
}

let arrToLL = require('./index');
console.log(reverseEvenLengthGroups(arrToLL([11,12,13,14,15])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([11,12,13,14,15,16,17,18])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([1,2,3,4])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([10,1,2,3,4,5])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([28,21,14,7])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([1,2])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([1,3,2,4,5,6,10,9,8,7,11,12,13,14,15,21,20,19,18,17,16])));
console.log('---------------------------------------------------------------------------------');
console.log(reverseEvenLengthGroups(arrToLL([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])));
