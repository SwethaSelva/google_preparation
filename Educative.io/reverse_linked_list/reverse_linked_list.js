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

let arrToLL = require('./index');
console.log(reverse(arrToLL([1, -2, 3, 4, -5, 4, 3, -2, 1,3])))