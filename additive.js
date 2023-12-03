/**
 * @param {string} num
 * @return {boolean}
 */
/**
 * 00123 - true
 */
var isAdditiveNumber = function(num) {
  return backTracking();

  function backTracking (curIdx = -1, count = 0, prev1 = '', prev2 = '') {
    if (num.length === curIdx + 1) return prev1 && (count >= 3);

    // found
    if (prev1) {
      let sum = `${+prev1 + +prev2}`;
      let curNum = num.substring(curIdx + 1, curIdx + sum.length + 1);

      return (
        sum === curNum
        && backTracking (curIdx + sum.length, count + 1, prev2, curNum)
      );
    }

    // not find two previous nums
    let curNum = '';
    for (let i = curIdx + 1; i < num.length; i++) {
      curNum += num[i];
      if (`${BigInt(curNum)}` !== curNum) return false;
      if (backTracking(i, count + 1, prev2, curNum)) return true;
    }
    return false;
  }
};

// console.log(isAdditiveNumber("11236")); // false
// console.log(isAdditiveNumber("1023")); // false
// console.log(isAdditiveNumber("112358")); // true
// console.log(isAdditiveNumber("199100199")); // true
console.log(isAdditiveNumber("1999999999999999910000000000000000")); // true