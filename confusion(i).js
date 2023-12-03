/**
 * https://leetcode.com/problems/maximize-the-confusion-of-an-exam/
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  answerKey += 'S';
  return Math.max(op('T'), op('F'));

  function op(char = 'T') {
    let curK = 0;
    let left = 0;
    let right = 0;
    let modified = [];
    let max = 0;

    for (; right < answerKey.length; right++) {
      max = Math.max(max, right - left);

      let ans = answerKey[right];
      if (ans === char) continue;

      if (curK < k) curK++;
      else left = modified.shift() + 1;
      modified.push(right);
    }

    return max;
  }
};

console.log(maxConsecutiveAnswers("TTFTTFTT", 1)); // 5
console.log(maxConsecutiveAnswers("TTFF", 2)); // 4
console.log(maxConsecutiveAnswers("TFFT", 1)); // 3