// Definition for singly-linked list.
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function arrToLL (arr) {
  let list = new ListNode(arr[0]);
  let curList = list;
  for (let i = 1; i < arr.length; i++) {
    curList.next = new ListNode(arr[i]);
    curList = curList.next;
  }
  return list;
}

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

    // odd group
    // Handle last group
    if (length - curCount < group) group = length - curCount;
    if (group % 2) {
      while (curCount != group) {
        curNode = curNode.next;
        curCount++;
      }
      group++;
    }

    // even group
    // Handle last group
    if (length - curCount < group) group = length - curCount;
    if (group % 2 === 0) {
      let [startNode, endNode] = reverseNode(curNode, group);
      prevNode.next = startNode;
      curNode = endNode;

      group++;
      curCount += group;
    }

    curCount++;
    prevNode = curNode;
    curNode = curNode.next;
  }
  return head;
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

console.log(reverseNode(arrToLL([11,12,13,14,15]), 6));
console.log('---------------------------------------------------------------------------------');
console.log(reverseNode(arrToLL([1,2,3,4]), 2));
console.log('---------------------------------------------------------------------------------');
console.log(reverseNode(arrToLL([10,1,2,3,4,5]), 1));
console.log('---------------------------------------------------------------------------------');
console.log(reverseNode(arrToLL([28,21,14,7]), 1));
console.log('---------------------------------------------------------------------------------');
console.log(reverseNode(arrToLL([1,2]), 2));
