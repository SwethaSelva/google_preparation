/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function arrToBT(arr) {
  let root = new TreeNode(arr[0]);
  let q = [root];
  for (let i = 1; i < arr.length; i += 2) {
    let curNode = q.shift();
    if (arr[i] !== null) {
      curNode.left = new TreeNode(arr[i]);
      q.push(curNode.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      curNode.right = new TreeNode(arr[i + 1]);
      q.push(curNode.right);
    }
  }
  return root;
}

module.exports = arrToBT;