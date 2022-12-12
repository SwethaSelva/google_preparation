class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (lists.length < 2) return lists;
  let resultHead = new LinkedListNode(-1);
  let curNode = resultHead;
  let activeCount = lists.length;

  while (activeCount) {
    activeCount = lists.length;
    let smallestNode = { data: Infinity };
    let smallestIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i].head) {
        activeCount--;
        continue;
      }

      if (smallestNode.data > lists[i].head.data) {
        smallestNode = lists[i].head;
        smallestIndex = i;
      }
    }
    if (smallestIndex === -1) break;
    let temp = smallestNode.next;
    smallestNode.next = null;
    
    curNode.next = smallestNode;
    lists[smallestIndex].head = temp;
    curNode = curNode.next;
  }
  console.log(JSON.stringify(lists), activeCount)
  return resultHead.next;
}

function convertArrToLL (arrLists) {
  for (let arr of arrLists) {
    let head = new LinkedListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new LinkedListNode(arr[i]);
      current = current.next;
    }

  }
  return arrLists;
}

console.log(JSON.stringify(convertArrToLL([2,3,4,5,7])));

console.log([[21,23,42],[1,2,4]]);
console.log([[11,41,51],[21,23,42]]);
console.log([[2],[1,2,4],[25,56,66,72]]);
console.log([[11,41,51],[2]]);
console.log([[2],[2],[1,2,4]]);