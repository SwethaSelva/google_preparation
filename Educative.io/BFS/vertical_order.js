const arrToBT = require( "./construct_level_order_BT" );

function verticalOrder(root) {
  let q = [[0, root]];
  let hashMap = {};
  while (q.length) {
    const [order, curNode] = q.shift();
    if (!hashMap[order]) hashMap[order] = [];
    hashMap[order].push(curNode.data);
    if (curNode.left) q.push([order - 1, curNode.left]);
    if (curNode.right) q.push([order + 1, curNode.right]);
  }
  let result = [];
  for (let index in hashMap) {
    if (+index < 0) result.unshift(hashMap[index]);
    else result.push(hashMap[index]);
  }
  return result;
}

console.log(verticalOrder(arrToBT([12, 6, 20, 2, 7, 5, 10])));
console.log(verticalOrder(arrToBT([1,2,3,4,6,5,7])));
console.log(verticalOrder(arrToBT([100,50,200,25,75,300,10,350,15])));
console.log(verticalOrder(arrToBT([20,40,50,90,67,94])));
console.log(verticalOrder(arrToBT([-10,-23,45,25,46])));
console.log(verticalOrder(arrToBT([0,-10,-5,3,6,4,8,5,70])));
console.log(verticalOrder(arrToBT([100,70,60,40,30,20,10])));