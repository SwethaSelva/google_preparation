let ListNode = function(val = 0, next = null) {
  this.val = val;
  this.next = next;
}
var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

/** 
 * https://leetcode.com/problems/design-linked-list/
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (!this.head) return -1;
  let currentNode = this.head;
  let curPos = 0;

  while (curPos !== index) {
    currentNode = currentNode.next;
    curPos++;
    if (!currentNode) return -1;
  }

  return currentNode.val;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  if (!this.head) this.head = this.tail = new ListNode(val);
  else this.head = new ListNode(val, this.head);
  return this;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  if (!this.head) this.head = this.tail = new ListNode(val);
  else {
    let nextTail = new ListNode(val);
    this.tail.next = nextTail;
    this.tail = nextTail;
  }
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) return this.addAtHead(val);
  if (!this.head) return;
  
  let currentNode = new ListNode(0, this.head);
  let curPos = 0;
  console.log({ curPos, index })
  while (curPos !== index) {
    currentNode = currentNode.next;
    curPos++;
    if (!currentNode) return false;
  }
  currentNode.next = new ListNode(val, currentNode.next);
  if (currentNode === this.tail) this.tail = currentNode.next;
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (!this.head) return false;
  if (index === 0) return this.head = this.head.next;

  let currentNode = new ListNode(0,this.head);
  let curPos = 0;
  while (curPos !== index) {
    currentNode = currentNode.next;
    if (!currentNode.next) return false;
    curPos++;
  }
  if (currentNode.next === this.tail) this.tail = currentNode;
  currentNode.next = currentNode.next.next;
};

function fu(optArr, valArr) {
  let obj = new MyLinkedList()
  for (let i = 1; i < optArr.length; i++) {
    if (optArr[i] == "get") {
      console.log(obj[optArr[i]](...valArr[i]));
    }
    console.log(optArr[i], '-=-=-=-=-=', ...valArr[i]);
    obj[optArr[i]](...valArr[i]);
    console.log('linked list-=-=--=', JSON.stringify(obj))
  }
}

// fu(
//   [,"addAtHead","get","addAtTail","addAtIndex","get","deleteAtIndex","get"],
//   [,[1],[1],[3],[1,2],[1],[1],[1]]
// )

// fu(["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"],
// [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]])

// fu(
//   ["MyLinkedList","addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"],
// [[],[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]]
// )

// fu(
//   ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get","get","deleteAtIndex","deleteAtIndex","get","deleteAtIndex","get"],
// [[],[1],[3],[1,2],[1],[1],[1],[3],[3],[0],[0],[0],[0]]
// )

fu(
  ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"],
  [[],[0,10],[0,20],[1,30],[0]]
)