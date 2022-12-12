class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverseKthLinkedList(head) {
  let prev = null,
    curr = head;

  while (curr != null) {
    let nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
}
function reverseLinkedList(head, k) {
  if (k === 1 || !head) return head;

  let cur = head;
  let curHead = head;
  let restLinkedList = new LinkedListNode(-1, head);
  let resultHead = restLinkedList;
  let i = 1;
  while (cur) {
    let nextNode = cur.next;
    if (i % k === 1) curHead = cur;
    else if (i % k === 0) {
      cur.next = null;
      let newTail = curHead;
      curHead = reverseKthLinkedList(curHead);
      restLinkedList.next = curHead;
      restLinkedList = newTail;
      curHead = null;
    }
    cur = nextNode;
    i++;
  }
  restLinkedList.next = curHead;
  return resultHead.next;
}

let arrToLL = require('./index');
console.log(reverseLinkedList(arrToLL([1,2,3,4,5,6,7,8]), 4));