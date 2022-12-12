let arrToBT = require('./construct_level_order_BT');

const connect = function (root) {
  let q = [root];
  let count = 1;
  while (q.length) {
    let curNode = q.shift();
    count--;
    if (curNode.left) q.push(curNode.left);
    if (curNode.right) q.push(curNode.right);

    if (count) curNode.next = q[0];
    else count = q.length;
  }
  return root;
};


console.log(connect(arrToBT([100, 50, 200, 25, 75, 300, 10, 350, 15], 50)));
console.log(connect(arrToBT([100, 50, 200, 25, 75, 300, 10, 350, 15], 100)));
console.log(connect(arrToBT([100, 50, 200, 25, 75, 300, 10, 350, 15], 200)));
console.log(connect(arrToBT([100, 50, 200, 25, 75, 300, 10, 350, 15], 75)));
console.log(connect(arrToBT([100, 50, 200, 25, 75, 300, 10, 350, 15], 300)));
