let arrToBT = require('./construct_level_order_BT');
function levelOrderTraversal (root){
  let q = [root];
  let count = 1;
  let result = '';
  while (q.length) {
    let curNode = q.shift();
    result += curNode.data;
    count--;
    if (curNode.left) q.push(curNode.left);
    if (curNode.right) q.push(curNode.right);
    if (q.length) {
      if (count) result += ','
      else {
        count = q.length;
        result += ':';
      }
    }
  }
  return result;
}

console.log(levelOrderTraversal(arrToBT([100,50,200,25,75,300,10,350,15])));
console.log(levelOrderTraversal(arrToBT([25,50,75,100,200,350])));
console.log(levelOrderTraversal(arrToBT([350,200,100,75,50,25])));
console.log(levelOrderTraversal(arrToBT([100])));
console.log(levelOrderTraversal(arrToBT([])));