class BST {
  constructor (val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function buildBST (arr) {
  let root = new BST(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    
  }
}

function inOrderSuccessor(root,x) {
  let minVal = x.data;
  let maxVal = Infinity;
  let higherNode = null;
  dfs(root);
  
  function dfs (node) {
    if (node === null) return node;

    if (node.data <= minVal) {
      dfs(node.right);
    } else {
      if (node.data < maxVal) {
        higherNode = node;
        maxVal = node.data;
      }
      dfs(node.left);
    }
  }
  return higherNode;
}