function reverseLinkedList (head) {
  let cur = head;
  let prev = null;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

function reverseBetween(head, left, right) {
  if (left < 1 || left >= right || !head) return head;

  let cur = head;
  let prev = null;
  let i = 1;

  let firstTail = prev;
  let secondTail = null;
  while (cur) {
    if (i === right) break;
    if (i === left) {
      firstTail = prev;
      secondTail = cur;
    }
    prev = cur;
    cur = cur.next;
    i++;
  }
  if (i < right) return head;

  let thirdPart = cur.next;
  cur.next = null;
  let newHead = reverseLinkedList(secondTail);
  secondTail.next = thirdPart;
  if (!firstTail) return newHead;
  firstTail.next = newHead;
  return head;
}

let arrToLL = require('./index');
// console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5,6,7]), 1, 4)));
// console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5,6,7]), 5, 4)));
console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5,6,7]), 2, 4)));
console.log(JSON.stringify(reverseBetween(arrToLL([1,2,3,4,5,6,7]), 3, 4)));