function maxProfit(array) {
  let maxProfitVal = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      max = array[i];
    }
    max = Math.max(max, array[i]);

    maxProfitVal = Math.max(maxProfitVal, max - min);
  }
  return maxProfitVal;
}

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9]));
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,6,8,7,8,7,9,4,1,2,4,5,8]));
console.log(maxProfit([1,2]));