class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }
  insert (val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let curNode = this.root;
    while (curNode) {
      if (curNode.val > val) {
        if (!curNode.left) {
          curNode.left = new Node(val);
          return this;
        }
        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = new Node(val);
          return this;
        }
        curNode = curNode.right;
      }
    }
  }
  search (val) {
    if (!this.root) return false;
    let curNode = this.root;
    while (curNode) {
      if (curNode.val === val) return true;
      if (curNode.val > val) curNode = curNode.left;
      if (curNode.val < val) curNode = curNode.right;
    }
    return false;
  }
  
  deleteNode (key, node) {
    if (!node) return null;

    if (key > node.val && node.right) node.right = this.deleteNode(key, node.right);
    else if (key < node.val && node.left) node.left = this.deleteNode(key, node.left);
    else {
      if (!node.left && !node.right) {
        if (node === this.root) this.root = null;
        return null;
      }
      if (node.left) {
        let inPerNode = node;
        while (inPerNode.left) inPerNode = inPerNode.left;
        [inPerNode.val, node.val] = [node.val, inPerNode.val];
        node.left = this.deleteNode(inPerNode.val, node.left);
      } else if (node.right) {
        let inSuccNode = node;
        while (inSuccNode.right) inSuccNode = inSuccNode.right;
        [inSuccNode.val, node.val] = [node.val, inSuccNode.val];
        node.right = this.deleteNode(inSuccNode.val, node.right)
      }
    }
    return node;
  }
}

let bst = new BinarySearchTree();
bst.insert(12);
bst.insert(122);
bst.insert(112);
bst.insert(11);
bst.insert(13);
bst.insert(90);
bst.insert(100);
bst.insert(91);
bst.insert(67);
bst.insert(89);
bst.insert(76);
/**
 *             12
 *            /  \
 *           11 122
 *               /
 *              112
 *               /
 *              13
 *               \
 *               90
 *              /  \
 *             67  100
 *              \   /
 *              89 91
 *              /
 *             76
 */

console.log(bst.search(100));
console.log(bst.search(100));
console.log(bst.search(101));

console.log(JSON.stringify(bst));
console.log(bst.deleteNode(12, bst.root));

console.log(JSON.stringify(bst));
