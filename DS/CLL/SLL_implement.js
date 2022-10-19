class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class CircularLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  printList() {
    let arr = [];
    let curList = this.head;
    while (curList && curList !== this.tail) {
      arr.push(curList.val);
      curList = curList.next;
    }
    arr.push(this.tail && this.tail.val);
    console.log(arr.join('-->'), this.tail && this.tail.next === this.head);
  }
  append (val) {
    if (!this.head) this.head = this.tail = new Node(val);
    else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }

    this.tail.next = this.head;
    this.size++;
  }
  preappend(val) {
    if (this.head) this.head = new Node(val, this.head);
    else this.head = this.tail = new Node(val);
    
    this.tail.next = this.head;
    this.size++;
  }
  insertAt (index, val) {
    if (index < 0 || index > this.size) return false;
    if (!this.head || index === this.size) return this.append(val);
    
    let curNode = this.head;
    for (let i = 1; i < index - 1; i++) curNode = curNode.next;
    curNode.next = new Node(val, curNode.next);
    this.size++;
  }
  search (val) {
    if (!this.head) return -1;
    let curNode = this.head;
    for (let i = 1; i <= this.size; i++) {
      if (curNode.val === val) return i;
      curNode = curNode.next;
    }
    return -1;
  }
  searchAt (index) {
    if (!this.head || index < 1 || index > this.size) return -1;
    let curNode = this.head;
    for (let i = 1; i < index && curNode; i++) curNode = curNode.next;
    return curNode.val || -1;
  }
  update(oldVal, newVal) {
    if (!this.head) return false;

    let curNode = this.head;
    for (let i = 1; i <= this.size; i++) {
      if (curNode.val === oldVal) {
        curNode.val = newVal;
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  }
  updateAt (index, val) {
    if (!this.head || index < 0 || index > this.size) return false;

    let curNode = this.head;
    for (let i = 0; i < index; i++) curNode = curNode.next;
    curNode.val = val;
    return true;
  }
  deleteHead () {
    if (!this.head) return false;
    if (this.head === this.tail) this.head = this.tail = null;
    else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.size--;
    return true;
  }
  deleteNodeByPrevNode (prevNode) {
    prevNode.next = prevNode.next.next;
    if (prevNode.next === this.head) this.tail = prevNode;
    this.size--;
    return true;
  }
  delete (val) {
    if (!this.head) return false;
    if (this.head.val === val) return this.deleteHead();

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next === this.head) return false;
      if (curNode.next.val === val) return this.deleteNodeByPrevNode(curNode);
      curNode = curNode.next;
    }
    return false;
  }
  deleteAt (index) {
    if (!this.head || index > this.size || index < 0) return false;
    if (index === 1) return this.deleteHead();

    let curNode = this.head;
    for (let i = 1; i < index - 1 && curNode.next; i++) curNode = curNode.next;
    return this.deleteNodeByPrevNode(curNode);
  }
}

let csll = new CircularLL();

console.log('----------------------------insert----------------------------');
csll.append(3);
csll.append(4);
csll.preappend(1);
csll.insertAt(1,2);
csll.insertAt(4, 5);
csll.printList();

// console.log('----------------------------search----------------------------');
// console.log(csll.search(4));
// console.log(csll.search(10));
// console.log(csll.searchAt(3));
// console.log(csll.searchAt(1));
// console.log(csll.searchAt(0));
// console.log(csll.searchAt(5));
// console.log(csll.searchAt(9));

console.log('----------------------------Update----------------------------');
csll.update(3, 10);
csll.update(5, 10);
csll.update(-1, 10);
csll.update(2, 10);
csll.updateAt(189, 15);
csll.updateAt(6, 15);
csll.updateAt(-1, 15);
csll.printList();

console.log('----------------------------Delete----------------------------');
csll.delete(10);
csll.delete(100);
csll.printList();
csll.deleteAt(2);
csll.deleteAt(3);
csll.deleteAt(1);
csll.deleteAt(1);
csll.deleteAt(1);
csll.printList();