let arrToBT = require ('./construct_level_order_BT');
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root, data = []) {
  if (!root) return 'M'
  data.push(
    root.val,
    ...serialize(root.left),
    ...serialize(root.right)
  );
  return data;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {Array} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let start = 0;
  return helper();

  function helper() {
    if (start >= data.length || data[start] === 'M') return null;
    return new TreeNode(
      data[start],
      helper(start++),
      helper(start++)
    );
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// console.log(serialize(arrToBT([100,50,200,25,75,350])));
console.log(deserialize(serialize(arrToBT([100,50,200,25,75,350]))));
console.log(arrToBT([100,50,200,25,75,350]));
// console.log(serialize(arrToBT([100,75,200,50,350,25])));
// console.log(serialize(arrToBT([200,100,350,25,75,50])));
// console.log(serialize(arrToBT([25,50,75,100,200,350])));
// console.log(serialize(arrToBT([350,200,100,75,50,25])));
// console.log(serialize(arrToBT([100])));
// console.log(serialize(arrToBT([1,2,3,4,5,6,7,8])));
// console.log(serialize(arrToBT(["NULL"])));