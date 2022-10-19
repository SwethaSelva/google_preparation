function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function arrToLL(arr) {
  let head = arr.length? new ListNode(arr[0]): null;
  let curNode = head;
  for (let i = 1; i < arr.length; i++) {
    curNode.next = new ListNode(arr[i]);
    curNode = curNode.next;
  }
  return head;
}

module.exports = { arrToLL, ListNode };