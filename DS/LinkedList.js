class Node {
  constructor(val = 0, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }
  isEmpty() {
    return !this.head;
  }
  insert(val) {
    if (this.isEmpty()) return this.head = new Node(val);

    let currentNode = this.head;
    while (currentNode.next) currentNode = currentNode.next;
    currentNode.next = new Node(val);
    return this;
  }
  insertAt(pos, val) {
    let currentNode = new Node(0, this.head);
    let curPos = 1;

    while (currentNode.next && curPos !== pos) {
      if (!currentNode.next) return false;
      currentNode = currentNode.next;
      curPos++;
    }

    currentNode.next = new Node(val, currentNode.next);
    return true;
  }
  search(val) {
    if (this.isEmpty()) return false;
    let currentNode = this.head;
    while (currentNode && currentNode.val !== val) currentNode = currentNode.next;
    return currentNode || false;
  }
  searchAt(pos) {
    let currentNode = new Node(0, this.head);
    for (let curPos = 1; curPos !== pos && currentNode; curPos++)
      currentNode = currentNode.next;
    return currentNode || false;
  }
  update(val, node) {
    let currentNode = this.head;
    while (currentNode && currentNode !== node) currentNode = currentNode.next;
    console.log({ val, node })
    if (!currentNode) return false;
    currentNode.val = val;
    return true;
  }
  updateVal(newVal, oldVal) {
    let currentNode = this.head;
    while (currentNode && currentNode.val !== oldVal) currentNode = currentNode.next;
    if (!currentNode) return false;
    currentNode.val = newVal;
    return true;
  }
  updateAt(val, pos) {
    let currentNode = this.head;
    let curPos = 1;
    while (currentNode && curPos !== pos) {
      currentNode = currentNode.next;
      curPos++;
    }
    if (!currentNode) return false;
    currentNode.val = val;
    return true;
  }
  delete(val) {
    if (this.isEmpty()) return false;
    if (this.head.val === val) this.head = this.head.next;
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.val !== val) currentNode = currentNode.next;
    if (!currentNode.next) return false;
    currentNode.next = currentNode.next.next;
  }
  deleteAt(pos) {
    let currentNode = new Node(0, this.head);
    let curPos = 1;
    while (currentNode.next && curPos !== pos) {
      currentNode = currentNode.next;
      curPos++;
    }
    if (!currentNode.next) return false;
    currentNode.next = currentNode.next.next;
    return true;
  }
}

let linkedList = new LinkedList(11);
linkedList.insert(12).insert(13).insert(14).insert(15).insert(16).insert(17).insert(18).insert(19).insert(20);
linkedList.insertAt(3, 200);
console.log({ linkedList: JSON.stringify(linkedList) });
console.log("Search the val 4 -=-=-=-=", linkedList.search(4));
console.log("Find what in pos 14 -=-=-=-=", linkedList.searchAt(14));
linkedList.updateVal(12,19);
console.log('linked list after update val 12-=-=-==-', JSON.stringify(linkedList));
console.log(linkedList.update(12,linkedList.search(4)));
console.log('linked list after update val 12-=-=-=-=-=', JSON.stringify(linkedList));
console.log(linkedList.update(12,linkedList.search(14)));
console.log(linkedList.deleteAt(2));
console.log({ linkedList: JSON.stringify(linkedList) });
console.log(linkedList.delete(12));
console.log({ linkedList: JSON.stringify(linkedList) });