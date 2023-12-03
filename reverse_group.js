/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  head = new ListNode(-1, head);
  let node = head.next;
  let prev = head;

  while (node) {
    // count
    let count = k;
    let curNode = node;
    while (curNode && count) {
      curNode = curNode.next;
      count--;
    }

    if (count) break;
    count = k - 1;
    let curPrev = node;
    curNode = curPrev.next;
    let curHead = node;

    while (curNode && count) {
      let nextNode = curNode.next;
      curPrev.next = nextNode;
      curNode.next = curHead;

      curHead = curNode;
      curNode = nextNode;
      count--;
    }
    node = curPrev.next;
    prev.next = curHead;
    prev = curPrev;
  }
  return head.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function arrToLL (arr) {
  let head = new ListNode(arr[0]);
  let curNode = head;
  for (let i = 1; i < arr.length; i++) {
    curNode.next = new ListNode(arr[i]);
    curNode = curNode.next;
  }
  return head;
}
// console.log(reverseKGroup(arrToLL([1,2,3,4,5]), 2));
console.log(reverseKGroup(arrToLL([1,2,3,4,5]), 3))