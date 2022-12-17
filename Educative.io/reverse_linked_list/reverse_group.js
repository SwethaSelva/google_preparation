/**
 * Definition for singly-linked list.
 */
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
  let restLL = head;
  let curList = head.next;
  let counter = 2;
  while (curList) {
    
  }
  return head;
};

console.log(reverseEvenLengthGroups(arrToLL([11,12,13,14,15])));
console.log(reverseEvenLengthGroups(arrToLL([1,2,3,4])));
console.log(reverseEvenLengthGroups(arrToLL([10,1,2,3,4,5])));
console.log(reverseEvenLengthGroups(arrToLL([28,21,14,7])));
console.log(reverseEvenLengthGroups(arrToLL([1,2])));
