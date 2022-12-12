class LinkedListNode {
  constructor(data, next = null) {
      this.data = data;
      this.next = next;
  }
}

function reverse(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;

    prev = cur;
    cur = temp;
  }
  return prev;
}

function reorderList(head) {
  if (!head || !head.next || !head.next.next) return head;
  let firstHalf = head;
  let secondHalf = reverse(findMiddle(head));
  let secondHalfHead = secondHalf;
  let newList = new LinkedListNode(-1, head);
  let cur = newList;
  while (secondHalf) {
    let tempNext = firstHalf.next;
    let tempSecNext = secondHalf.next;

    cur.next = firstHalf;
    cur.next.next = secondHalf;
    cur = cur.next.next;

    firstHalf = tempNext;
    secondHalf = tempSecNext;
  }
  if (cur !== firstHalf) {
    firstHalf.next = null;
    cur.next = firstHalf;
  }
  return newList.next;
}
function findMiddle(head) {
  let fast = head;
  let slow = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }
  return slow;
}
let arrToLL = require('./index');
console.log(JSON.stringify(reorderList(arrToLL([1, 1, 2, 2, 3, -1, 10, 12])))); // 1, 12,1,10,2,-1,2,3
console.log(JSON.stringify(reorderList(arrToLL([1,2,3,4,5,6,7,8])))); // 1,8,2,7,3,6,4,5
console.log(JSON.stringify(reorderList(arrToLL([1,2,3,4,5,6,7])))); // 1,7,2,6,3,5,4
console.log(JSON.stringify(reorderList(arrToLL([1,2])))); // 2
console.log(JSON.stringify(reorderList(arrToLL([1,2,3])))); // 3
console.log(JSON.stringify(reorderList(arrToLL([1,2,3,4])))); // 3
console.log(JSON.stringify(reorderList(arrToLL([1,2,3,4,5])))); // 4

/**
 * 1. Move to middle - odd -> middle + 1, even -> middle ceil
 * 2. Split it into two half.
 * 3. Reverse the second half
 * 
 * 
 * 1 - 2 - 3 - 4 - 5
 * 1 - 2 - 3 - 4 - 5 - 6
 */