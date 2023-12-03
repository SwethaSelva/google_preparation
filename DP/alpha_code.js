/**
 * https://leetcode.com/problems/decode-ways/
 * Encode: A - 1, B - 2,... Z - 26. Given digits, return the number of possible decoding ways.
 * Eg: 11 --> 2 (AA, K)
 */
function isValidDoubleDigit (char1, char2) {
  return char1 === "1" || (char1 === "2" && +char2 <= 6)
}
// 1201234 - not working
var numDecodings = function (s) {
  if (s[0] === '0') return 0;

  let prevResult = s.at(-1) === '0'? 0: 1;
  let result = s.at(-2) === '0'? 0: isValidDoubleDigit(s.at(-2), s.at(-1))? prevResult + 1: 1;

  for (let i = s.length - 3; i >= 0; i--) {
    let temp = result;
    if (s[i] === '0') {
      if (s[i+1] === '0') return 0;
      result = 0;
    }
    if (isValidDoubleDigit(s[i], s[i+1])) result += prevResult;
    prevResult = temp;
  }
  return result;
}

function parseIntVal (char1, char2) {
  return +`${char1}${char2}`;
}

// Working solution
var numDecodings = function(s) {
  let dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = s.at(0) === '0'? 0: 1;

  for (let i = 2; i <= s.length; i++) {
    let num1 = +s[i - 1];
    let num2 = parseIntVal(s[i-2], s[i-1]);

    if (num1 >= 1 && num1 <= 9) dp[i] += dp[i-1];
    if (num2 >= 10 && num2 <= 26) dp[i] += dp[i-2];

  }
  return dp[s.length];
};

// BackTracking
// var numDecodings = function(s) {
//   if (s[0] === '0') return 0;

//   let result = 0;
//   return backTracking();
  
//   function backTracking (curPos = 0) {
//     if (curPos === s.length) return ++result;
//     if (curPos > s.length) return result;

//     if (s[curPos] === '0') return 0;

//     // single digit encode - catch: if next ele is zero, not allowed
//     if (s[curPos + 1] !== '0') backTracking(curPos + 1);

//     // double digit encode - catch: if double is more than 26, not allowed
//     if (s[curPos] === '1' || (s[curPos] === '2' && s[curPos+1] <= '6')) backTracking(curPos + 2);

//     return result;
//   }
// };


console.log(numDecodings("1")); // 1
console.log(numDecodings("11")); // 2
console.log(numDecodings("111")); // 3
console.log(numDecodings("1111")); // 5
console.log(numDecodings("11111")); // 8
console.log(numDecodings("111111")); // 13
console.log(numDecodings("1111111")); // 21
console.log(numDecodings("11111111")); // 34
console.log(numDecodings("111111111")); // 55
console.log(numDecodings("1131111111")); // 63
console.log(numDecodings("1111111111")); // 89
console.log(numDecodings("123700532")); // 0
console.log(numDecodings("2000006")); // 0
console.log(numDecodings("1214")); // 5
console.log(numDecodings("1244")); // 3
console.log(numDecodings("1204")); // 1
console.log(numDecodings("226")); // 3
console.log(numDecodings("1201234")); // 3
console.log(numDecodings("111111111111111111111111111111111111111111111")); // 1836311903