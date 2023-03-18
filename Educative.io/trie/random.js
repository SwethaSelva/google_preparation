var RandomizedSet = function() {
  this.set = {};
  this.arr = [];
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.set[val]) return false;
  this.set[val] = true;
  this.arr.push(val);
  return true;
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (!this.set[val]) return false;
  delete this.set[val];
  return true;
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let index = Math.floor(Math.random() * this.arr.length);

  while (!this.set[this.arr[index]]) {
      index = Math.floor(Math.random() * this.arr.length);
  }
  return this.arr[index];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/

function generator(optrArr, valArr) {
  let trie = new RandomizedSet();
  for (let i = 1; i < optrArr.length; i++) {
    console.log(optrArr[i], valArr[i], trie[optrArr[i]](...valArr[i]));
  }
  console.log('-----------------------------------------------------------------------')
}

generator(["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"], [[],[1],[2],[2],[],[1],[2],[]])