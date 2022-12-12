class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrToLL (arr) {
  let head = new Node(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new Node(arr[i]);
    cur = cur.next;
  }
  return head;
}

module.exports = arrToLL;