let MaxHeap = require('./Heap');
function reorganizeString(inputString){
  let hash = {};
  let outputString = '';
  let highestCount = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (!hash[inputString[i]]) hash[inputString[i]] = 0
    hash[inputString[i]] += 1;
    if (highestCount < hash[inputString[i]]) highestCount = hash[inputString[i]];
  }
  if (highestCount > Math.ceil(inputString.length/2)) return outputString;

  let maxHeap = new MaxHeap();
  maxHeap.compareFn = (a, b) => a[1] > b[1];
  for (let char in hash) {
    maxHeap.insert([char, hash[char]]);
  }
  let previous = null;
  while (maxHeap.size() || previous) {
    let [char, count] = maxHeap.pop() || ['', 0];
    outputString += char;
    if (previous) {
      maxHeap.insert(previous);
      previous = null;
    }
    if (count - 1) previous = [char, count - 1];
  }
  return outputString;
}

console.log(reorganizeString("abb"));
console.log(reorganizeString("aaaaabbbbbbb"));
console.log(reorganizeString("jjjjj"));
console.log(reorganizeString("aaabc"));
console.log(reorganizeString("fofjjb"));