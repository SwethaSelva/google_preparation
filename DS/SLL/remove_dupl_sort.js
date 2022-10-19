let { arrToLL } = require('./index');
/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  if (!head) return head;

  let prevNode = head;
  let curNode = head.next;
  while (curNode) {
    if (prevNode.val !== curNode.val) {
      prevNode.next = curNode;
      prevNode = curNode;
    } else prevNode.next = null
    curNode = curNode.next;
  }
  return head;
};

var deleteDuplicates = function(head) {
  let curr = head
  while(curr){
    if(curr.next && curr.val === curr.next.val){
      let next = curr.next.next
      curr.next = next
    }else{
      curr = curr.next
    }
  }
  return head
};

console.log(deleteDuplicates(arrToLL([1,1,2]))); // 1 2
console.log(deleteDuplicates(arrToLL([1,1,1,1,1,1,1,1]))); // 1 2
console.log(JSON.stringify(deleteDuplicates(arrToLL([1,1,2,2,3,3,4])))); // 1 2 3 4 5
console.log(JSON.stringify(deleteDuplicates(arrToLL([1,1,2,2,3,4,4,4,4,4,4])))); // 1 2 3 4