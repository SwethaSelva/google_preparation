let arrToBT = require('./construct_level_order_BT');

function zigzagLevelOrder(root) {
  let result = [];
  let q = [root];
  let count = 1;
  let isReserve = false;
  let curList = [];
  while (q.length) {
    let curNode = q.shift();
    count--;
    if (isReserve) curList.unshift(curNode.data);
    else curList.push(curNode.data);
    if (curNode.left) q.push(curNode.left);
    if (curNode.right) q.push(curNode.right);
    if (!count) {
      isReserve = !isReserve;
      result.push(curList);
      curList = [];
      count = q.length;
    }
  }
  return result;
}

console.log(zigzagLevelOrder(arrToBT([9,7,20,3,15])));
console.log(zigzagLevelOrder(arrToBT([20,10,50])));
console.log(zigzagLevelOrder(arrToBT([-10,-23,45,-25])));
console.log(zigzagLevelOrder(arrToBT([0])));
console.log(zigzagLevelOrder(arrToBT([2,1])));