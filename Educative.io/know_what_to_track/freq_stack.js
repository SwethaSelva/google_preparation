const FreqStack = function() {
  this.hash = {};
  this.freqArr = [];
}

FreqStack.prototype.push = function(value) {
  this.hash[value] = (this.hash[value] || 0) + 1;
  let freq = this.hash[value] - 1;
  if (!this.freqArr[freq]) this.freqArr[freq] = [];
  this.freqArr[freq].push(value);
  return null;
}

// Use pop function to pop the most frequent element from the stack
FreqStack.prototype.pop = function() {
  let lastIdx = this.freqArr.length - 1;
  let value = this.freqArr[lastIdx].pop();
  if (!this.freqArr[lastIdx].length) this.freqArr.pop();

  return value;
};

function functionGenerator(optArr, valArr) {
  let freqStack = new FreqStack();
  console.log('-------------------------------------------------')
  for (let i = 1; i < optArr.length; i++) {
    console.log(freqStack[optArr[i]](...valArr[i]));
  }
}

// functionGenerator(["FreqStack","push","push","push","push","pop"], [null,5,7,7,5,null]);
// functionGenerator(["FreqStack","push","push","push","push","pop"], [null,5,7,7,14,null]);
// functionGenerator(["FreqStack","push","pop"], [null,4,null]);
// functionGenerator(["FreqStack","push","push","push","pop","push","push","push","pop","pop"], [null,5,4,9,null,3,7,5,null,null]);
// functionGenerator(["FreqStack","push","pop","push","push","pop"], [null,5,null,4,1,null]);
// functionGenerator(
//   ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"],
//   [null, 5, 7, 5, 7, 4, 5, null, null, null, null]
// );
functionGenerator(["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
                  [[],[4],[0],[9],[3],[4],[2],[],[6],[],[1],[],[1],[],[4],[],[],[],[],[],[]]);
