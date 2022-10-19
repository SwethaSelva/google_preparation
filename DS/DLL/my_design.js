class Node {
  constructor (val = 0, prev = null, next = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0
  }
  printList() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.val);
      currentList = currentList.next;
    }

    console.log('Forward', array.join(' <--> '));
    array = [];
    currentList = this.tail;
    while (currentList !== null) {
      array.unshift(currentList.val);
      currentList = currentList.prev;
    }
    console.log('Reverse', array.join(' <--> '));
    console.log('-------------------------------------------------------------');
    return this;
  }
  insert(val) {
    if (!this.tail) this.head = this.tail = new Node(val);
    else {
      let newTail = new Node(val);
      newTail.prev = this.tail;
      this.tail.next = newTail;
      this.tail = newTail;
    }
    this.size++;
    return true;
  }
  insertAt(index, val) {
    if (index < 0 || index > this.size) return false;
    if (index === this.size) return this.insert(val);

    let curNode = this.head;
    let curPos = 1;
    while (curNode) {
      if (curPos === index) {
        let temp = new Node(val, curNode, curNode.next);
        if (temp.prev) temp.prev.next = temp;
        if (temp.next) temp.next.prev = temp;
        this.size++;
        return true;
      }
      curPos++;
      curNode = curNode.next;
    }
    return false;
  }
  addAtHead(val) {
    if (!this.head) this.head = this.tail = new Node(val);
    else {
      this.head.prev = new Node(val, null, this.head);
      this.head = this.head.prev;
    }
    this.size++;
    return true;
  }
  search(val) {
    if (!this.head) return false;
    let curNode = this.head;
    let curPos = 0;
    while (curNode) {
      curPos++;
      if (curNode.val === val) return curPos;
      curNode = curNode.next;
    }
    return -1;
  }
  searchValAt(index) {
    if (!this.head) return false;
    let curNode = this.head;
    let curPos = 1
    while (curNode) {
      if (index === curPos) return curNode.val;
      curNode = curNode.next;
      curPos++;
    }
    return false;
  }
  update(oldVal, newVal) {
    if (!this.head) return false;
    let curNode = this.head;
    while (curNode) {
      if (curNode.val === oldVal) {
        curNode.val = newVal;
        this.printList();
        return true;
      }
      curNode = curNode.next;
    }
    this.printList();
    return false;
  }
  updateAt(index, val) {
    if (!this.head || index < 1 || index > this.size) return false;

    if (index <= Math.floor(this.size/2)) return this.updateByMoveForward(index, val);
    return this.updateByMoveBackward(index, val);
  }
  updateByMoveBackward(index, val) {
    let curPos = this.size;
    let curNode = this.tail;
    while (curNode) {
      if (index === curPos) {
        curNode.val = val;
        this.printList();
        return true;
      }
      curNode = curNode.prev;
      curPos--;
    }
    this.printList();
    return false;
  }
  updateByMoveForward(index, val) {
    let curPos = 1;
    let curNode = this.head;
    while (curNode) {
      if (index === curPos) {
        curNode.val = val;
        this.printList();
        return true;
      }
      curNode = curNode.next;
      curPos++;
    }
    this.printList();
    return false;
  }
  deleteVal(val) {
    if (!this.head) return false;
    
    let curNode = this.head;
    while (curNode) {
      if (curNode.val === val) {
        curNode.next.prev = curNode.prev;
        curNode.prev.next = curNode.next;
        this.size--;
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  }
  deleteByIndex(index) {
    if (!this.head || index < 0 || index > this.size) return false;

    let curNode = this.head;
    let curPos = 1;
    while (curNode) {
      if (curPos === index) {
        if (curNode.prev) curNode.prev.next = curNode.next;
        if (curNode.next) curNode.next.prev = curNode.prev;

        if (curNode === this.head) this.head = this.head.next;
        if (curNode === this.tail) this.tail = this.tail.prev;
        return true;
      }
      curNode = curNode.next;
      curPos++;
    }
    return false;
  }
}

let dll = new DoubleLinkedList();

// insert
console.log('---------------------------------------insert---------------------------------------')
dll.insert(3);
dll.printList();
dll.insert(5);
dll.printList();
dll.insert(20);
dll.printList();
dll.insertAt(3, 15);
dll.printList();
dll.insertAt(1, 4);
dll.printList();
dll.insertAt(2, 6);
dll.printList();

// Search / Read
console.log('---------------------------------------Search---------------------------------------')
console.log(dll.search(3));
console.log(dll.search(100));
console.log(dll.search(20));
console.log(dll.search(4));
console.log(dll.searchValAt(3));
console.log(dll.searchValAt(-1));

// Update
console.log('---------------------------------------Update---------------------------------------')
dll.update(20, 12);
dll.printList();
dll.update(5, 10);
dll.printList();
dll.update(100, 1);
dll.printList();
dll.updateAt(20, 12);
dll.printList();
dll.updateAt(2, 12);
dll.printList();
dll.updateAt(20, 12);
dll.printList();

// delete
console.log('---------------------------------------delete---------------------------------------')
dll.deleteVal(12);
dll.deleteVal(120);
dll.deleteByIndex(5);
dll.deleteByIndex(1);
dll.printList();
dll.deleteByIndex(2);
dll.deleteByIndex(20);
dll.printList();