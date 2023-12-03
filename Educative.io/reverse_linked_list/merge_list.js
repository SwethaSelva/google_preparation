let { arrToLL, Node } = require('./index');

function sortList(head) {
    if (!head || !head.next) return head;
    let slowPtr = head;
    let fastPtr = head;
    let prevNode = null;
    while (fastPtr && fastPtr.next) {
        prevNode = slowPtr;
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    if (prevNode) prevNode.next = null;
    // console.log({ head, slowPtr })
    return mergeList(sortList(head), sortList(slowPtr));
}

function mergeList (list1, list2) {
    console.log({ list1, list2 })
    let head = new Node(-1);
    let curNode = head;
    let curList1 = list1;
    let curList2 = list2;
    while (curList1 || curList2) {
        if (
            !curList1 ||
            (curList2 && curList2.val <= curList1.val)
        ) {
            curNode.next = curList2;
            curList2 = curList2.next;
        }
        else {
            curNode.next = curList1;
            curList1 = curList1.next;
        }
        curNode = curNode.next;
    }
    console.log('in', { head })
    return head.next;
}
console.log(sortList(arrToLL([-1, 5, 3, 4, 0])))
