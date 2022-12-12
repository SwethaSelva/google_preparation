// function findTribonacci(n, meom = {0: 0, 1: 1, 2: 1}) {
//   if (!(n in meom)) meom[n] = findTribonacci(n-1) + findTribonacci(n - 2) + findTribonacci(n - 3);
//   return meom[n];
// }

function findTribonacci(n) {
  if (n < 3) return n === 0? 0: 1;

  let firstNum = 0;
  let secondNum = 1;
  let thirdNum = 1;

  for (let i = 2; i < n; i++) {
    let sum = firstNum + secondNum + thirdNum;
    [firstNum, secondNum, thirdNum] = [secondNum, thirdNum, sum];
  }
  return thirdNum;
}
console.log(findTribonacci(0)); // 0
console.log(findTribonacci(1)); // 1
console.log(findTribonacci(2)); // 1
console.log(findTribonacci(3)); // 2
console.log(findTribonacci(4)); // 4