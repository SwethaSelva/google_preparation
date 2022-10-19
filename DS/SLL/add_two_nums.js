let { arrToLL, ListNode } = require('./index');
/**
 * https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curNode = new ListNode(0, l1);
  let remainder = 0;
  while (curNode.next || l2 || remainder) {
    let l2Val = l2? l2.val : 0;


    let curVal = l2Val + remainder;
    if (curNode.next) curVal += curNode.next.val;
    remainder = curVal < 10? 0: Math.floor(curVal / 10);

    if (!curNode.next) curNode.next = new ListNode();
    curNode.next.val = curVal % 10;

    if (l2) l2 = l2.next;
    curNode = curNode.next;
  }

  return l1;
};

console.log(
  JSON.stringify(addTwoNumbers(arrToLL([9,4,3]), arrToLL([5,6,4])))
); // [4,1,8]
console.log(
  JSON.stringify(addTwoNumbers(arrToLL([9,9,9,9,9,9,9]), arrToLL([9,9,9,9])))
); // [8,9,9,9,0,0,0,1]
console.log(
  JSON.stringify(addTwoNumbers(arrToLL([0]), arrToLL([])))
); // 0
console.log(
  JSON.stringify(addTwoNumbers(arrToLL([]), arrToLL([1])))
); // 1
console.log(
  JSON.stringify(addTwoNumbers(arrToLL([9]), arrToLL([1])))
); // 10
// console.log(
//   JSON.stringify(addTwoNumbers(arrToLL([0]), arrToLL([])))
// );
// console.log(
//   JSON.stringify(addTwoNumbers(arrToLL([0]), arrToLL([])))
// );