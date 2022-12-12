let arrToBT = require('./construct_level_order_BT');
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root;
  helper(root);
  function helper(startNode) {
    if (!startNode.left && !startNode.right) return [startNode, startNode];
    let endNode = startNode;
    let temp = endNode.right;
    if (endNode.left) {
      let [start, end] = helper(endNode.left);
      endNode.left = null;
      endNode.right = start
      endNode = end;
    }
    if (temp) {
      let [start, end] = helper(temp);
      endNode.right = start;
      endNode = end;
    }
    return [startNode, endNode];
  }
  return root;
};

console.log(JSON.stringify(flatten(arrToBT([3, 2, 17, 1, 4, 19, 5]))));
console.log(JSON.stringify(flatten(arrToBT([1, 2, 5, 3, 4, null, 6]))));
console.log(JSON.stringify(flatten(arrToBT([1, 2, 3, 4, 5, 6, 7]))));
console.log(JSON.stringify(flatten(arrToBT([1, 2, 3, 4, 5, 6, 9, 7, 8]))));
console.log(JSON.stringify(flatten(arrToBT([5, 2, 1, 6, 10, 11, 44]))));
console.log(JSON.stringify(flatten(arrToBT([1, 2, 5, 3, 4, 6]))));
console.log(JSON.stringify(flatten(arrToBT([-1, -2, -5, -6, -4, -6]))));
console.log(JSON.stringify(flatten(arrToBT([1, 2, 3, 4, 5]))));