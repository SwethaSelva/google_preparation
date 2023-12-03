var ListNode = function (val = 0, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};

class DoubleLinkedList {
  constructor () {
    this.hash = {};
    this.head = null;
    this.tail = null;
  }
  get (val) {
    let curNode = this.hash[val];
    if (!curNode || this.tail === curNode) return null;

    curNode.next.prev = curNode.prev;
    let nextNode = curNode.next;
    if (curNode.prev) curNode.prev.next = nextNode;
    else this.head = curNode.next;

    let oldTail = this.tail;
    oldTail.next = curNode;
    curNode.prev = oldTail;
    this.tail = curNode;
    this.tail.next = null;

    this.hash[val] = this.tail;
    this.hash[oldTail.val] = this.tail.prev;
  }
  push (val) {
    if (!this.head) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      let oldTail = this.tail;
      this.tail = new ListNode(val, null, oldTail);
      oldTail.next = this.tail;
    }

    this.hash[val] = this.tail;
    return this.tail;
  }
  delete () {
    let headVal = this.head.val;
    delete this.hash[headVal];

    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    return headVal;
  }
}
/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.filledCapacity = 0;

  this.dll = new DoubleLinkedList();
  this.map = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;

  let val = this.map.get(key);
  this.dll.get(key);

  return val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.set(key, value)
    this.get(key);
    return true;
  }

  if (this.filledCapacity === this.capacity) {
    this.map.delete(this.dll.delete());
    this.filledCapacity--;
  }

  this.map.set(key, value);
  this.dll.push(key);
  this.filledCapacity++;
  return true;
};

function instructor(insArr, valArr) {
  let lRUCache = new LRUCache(...valArr[0]);

  for (let i = 1; i < valArr.length; i++) {
    let val = lRUCache[insArr[i]](...valArr[i]);
    if (insArr[i] === 'get') console.log(val);
  }
  console.log('--------------------------------------------------------------------------------');
}

instructor(
  ["LRUCache","put","put","get","put","get","put","get","get","get"],
  [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
); // 1, -1, -1, 3, 4 - [1,2], [2,1],[1,3], [3,4], [4,3], [3,4]
instructor(
  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
  [[2],[1,0],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
); // 0,-1,-1,3,4
instructor(
  ["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"],
  [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]
); // 4,3,2,-1,-1,2,3,-1,5