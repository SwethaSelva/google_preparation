/**
 * Binary tree has less than or equal to 2 children
 */
class Node {
  constructor (val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  _isLeaf(node) {
    return !node.left && !node.right;
  }
  append (val) {
    if (!this.root) {
      this.root = new Node (val);
      return this;
    }
    let newNode = new Node(val);
    let q = [this.root];
    while (q.length) {
      let curNode = q.shift();
      if (!curNode.left) {
        curNode.left = newNode;
        return this;
      }
      if (!curNode.right) {
        curNode.right = newNode;
        return this;
      }
      q.push(curNode.left, curNode.right);
    }
    return this;
  }
  search (val) {
    if (!this.root) return false;
    let children = ['left', 'right'];
    let q = [this.root];
    while (q.length) {
      let curNode = q.shift();
      for (let child of children) {
        if (curNode[child]) {
          if (curNode[child].val === val) return curNode[child];
          q.push(curNode[child]);
        }
      }
    }
    return false;
  }
  BST_traversal () {
    if (!this.root) return [];

    let q = [this.root];
    let children = ['left', 'right'];
    let result = [];
    while (q.length) {
      let curNode = q.shift();
      result.push(curNode.val);
      for (let child of children) {
        if (curNode[child]) q.push(curNode[child]);
      }
    }
    return result;
  }
  preOrderTraversal(node, result = []) {
    if (!node) return result;
    result.push(node.val);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
    return result;
  }
  postOrderTraversal(node, result = []) {
    if (!node) return result;
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.val);
    return result;
  }
  inOrderTraversal(node, result = []) {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.val);
    this.inOrderTraversal(node.right, result);
    return result;
  }
  delete (val) {
    if (!this.root) return false;
    if (this._isLeaf(this.root)) {
      if (this.root.val === val) this.root = null;
      return true;
    }
    let matchedNode = null;
    let q = [this.root];
    let curNode = null;
    while (q.length) {
      curNode = q.shift();
      if (curNode.val === val) matchedNode = curNode;
      if (curNode.left) q.push(curNode.left);
      if (curNode.right) q.push(curNode.right);
    }
    if (matchedNode === null) return false;
    [curNode.val, matchedNode.val] = [matchedNode.val, curNode.val];

    return this.deleteNode(this.root, curNode);
  }
  deleteNode(curNode, node) {
    if (!curNode) return curNode;
    if (node === curNode) return null;
    curNode.left = this.deleteNode(curNode.left, node);
    curNode.right = this.deleteNode(curNode.right, node);
    return curNode;
  }
}

let bt = new BinaryTree();
bt.append(2);
bt.append(5);
bt.append(6);
bt.append(10);
bt.append(11);
bt.append(15);
console.log(JSON.stringify(bt));

console.log(bt.search(10));
console.log(bt.BST_traversal());
console.log(bt.inOrderTraversal(bt.root));
console.log(bt.postOrderTraversal(bt.root));
console.log(bt.preOrderTraversal(bt.root));
console.log(bt.delete(10));
console.log(bt.delete(2));
console.log(bt.delete(6));
console.log(bt.delete(5));
console.log(bt.delete(10));
console.log(bt.delete(11));
console.log(bt.delete(15));
console.log(bt.delete(15));

console.log(JSON.stringify(bt));