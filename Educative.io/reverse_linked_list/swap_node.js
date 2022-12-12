function swapNodes(head, k) {
  let len = findLength(head);
  if (k > len) return head;
  let left = Math.min(k, len - k + 1);
  let right = Math.max(k, len - k + 1);
  if (left === right) return head;

  let p1 = null;
  let p2 = null;
  let c1 = head;
  let c2 = head;
  let i = 1;
  while (i < right) {
    if (i === left) {
      p1 = p2;
      c1 = c2;
    }
    p2 = c2;
    c2 = c2.next;
    i++
  }

  if (p1) p1.next = c2;
  else head = c2;
  p2.next = c1;
  [c2.next, c1.next] = [c1.next, c2.next];

  return head;
}

function findLength(head) {
  let cur = head;
  let length = 0;
  while (cur) {
    length++;
    cur = cur.next;
  }
  return length;
}
let arrToLL = require('./index');
console.log(JSON.stringify(swapNodes(arrToLL([1,2,3,4,5,6]), 1)));
console.log(JSON.stringify(swapNodes(arrToLL([1,2,3,4,5,6]), 2)));
console.log(JSON.stringify(swapNodes(arrToLL([1,2,3,4,5]), 2)));
