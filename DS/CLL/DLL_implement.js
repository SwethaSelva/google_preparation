class Node {
  constructor (val = 0, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class CircularDLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  printList() {
    let curList = this.head;
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      arr.push(curList.val);
      curList = curList.next;
    }
    console.log('Forward-=-=-=-=', arr.join('<-->'));

    arr = [];
    curList = this.tail;
    for (let i = 0; i < this.size; i++) {
      arr.unshift(curList.val);
      curList = curList.prev;
    }
    console.log('Reverse-=-=-=-=', arr.join('<-->'), this.head === this.tail.next);
    console.log('---------------------------------');
  }
  prepend (val) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
      this.head.prev = this.tail;
    } else {
      this.head.prev = new Node(val, this.tail, this.head);
      this.head = this.head.prev;
    }
    this.tail.next = this.head;
    this.size++;
    this.printList();
    return true;
  }
  append (val) {
    if (!this.tail) {
      this.head = this.tail = new Node(val);
    } else {
      this.tail.next = new Node(val, this.tail, this.head);
      this.tail = this.tail.next;
    }
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.size++;
    this.printList();
    return true;
  }
  insertAt (index, val) {
    if (index === 1 || !this.head || index === this.size) return this.append(val);
    if (index < 0 || index > this.size) return false;

    let curNode = this.head;
    for (let i = 1; i < index && curNode !== this.tail; i++) curNode = curNode.next;
    curNode.next = curNode.next.prev = new Node(val, curNode, curNode.next);
    this.size++;

    this.printList();
    return true;
  }
  search (val) {
    let curNode = this.head;
    let i = 1;
    while (curNode !== this.tail) {
      if (curNode.val === val) return i;
      curNode = curNode.next;
      i++;
    }
    return curNode.val === val? i: -1;
  }
  searchAt (index) {
    if (!this.head || index < 0 || index > this.size) return -1;

    let curNode = this.head;
    let i = 1;
    while (curNode !== this.tail) {
      if (index === i) return curNode.val;
      curNode = curNode.next;
      i++;
    }
    return i === index? curNode.val: -1;
  }
  update (oldVal, newOld) {
    let curNode = this.head;
    if (this.head === this.tail && this.head.val === oldVal) curNode.val = newOld;
    while (curNode.next !== this.head) {
      if (curNode.val === oldVal) {
        curNode.val = newOld;
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  }
  updateAt (index, val) {
    if (!this.head || index < 0 || index > this.size) return false;

    let curNode = this.head;
    for (let i = 0; i < index - 1; i++) curNode = curNode.next;
    curNode.val = val;
    return true;
  }
  deleteHead() {
    this.head = this.head.next;
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.size--;
  }
  delete (val) {
    if (!this.head) return false;
    if (this.head === this.tail && this.head.val === val) {
      this.head = this.tail = null;
      return false;
    }
    if (this.head.val === val) return this.deleteHead();

    // remove middle vals
    let curNode = this.head;
    while (curNode.next !== this.head) {
      if (curNode.val === val) {
        if (curNode.next) curNode.next.prev = curNode.prev;
        if (curNode.prev) curNode.prev.next = curNode.next;
        if (curNode === this.tail) this.tail = curNode.prev;
        this.size--;
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  }
  deleteAt (index) {
    if (!this.head || !index || index < 0 || index > this.size) return false;
    if (index === 1) return this.deleteHead();

    let curNode = this.head;
    for (let i = 1; i < index; i++) curNode = curNode.next;

    if (curNode.next) curNode.next.prev = curNode.prev;
    if (curNode.prev) curNode.prev.next = curNode.next;
    if (this.tail === curNode) this.tail = curNode.prev;
    this.size--;
  }
}

let cdll = new CircularDLL();
console.log('--------------------------------Insert--------------------------------');
cdll.append(3);
cdll.append(10);
cdll.append(13);
cdll.append(31);
cdll.prepend(1);
cdll.insertAt(1, -9);
cdll.insertAt(cdll.size, 12);
cdll.printList();
console.log('--------------------------------Search--------------------------------');
console.log(cdll.search(23));
console.log(cdll.search(13));
console.log(cdll.searchAt(1));
console.log(cdll.searchAt(13));
console.log(cdll.searchAt(3));
cdll.printList();
console.log('--------------------------------Update--------------------------------');
cdll.update(13, 15);
cdll.update(130, 15);
cdll.updateAt(3,200);
cdll.updateAt(-3,200);
cdll.updateAt(10,200);
cdll.printList();
console.log('--------------------------------Delete--------------------------------');
cdll.delete(15);
cdll.printList();
cdll.delete(152);
cdll.printList();
cdll.deleteAt(152);
cdll.printList();
cdll.deleteAt(1);
cdll.printList();
cdll.deleteAt(cdll.size);
cdll.printList();
cdll.deleteAt(2);
cdll.printList();
cdll.deleteAt(1);
cdll.printList();
cdll.deleteAt(1);
cdll.printList();
cdll.deleteAt(1);
cdll.printList();
cdll.insertAt(1, -9);
