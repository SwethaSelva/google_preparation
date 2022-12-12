function findLongestSubstring(inputString) {
  let longestStr = 0;
  let hash = {};
  let left = 0;
  let right = 0;
  while (right < inputString.length) {
    let curEle = inputString[right];
    if (hash[curEle] !== undefined && hash[curEle] >= left) {
      longestStr = Math.max(longestStr, right - left);
      left = hash[curEle] + 1;
    }
    hash[curEle] = right;
    right++;
  }
  longestStr = Math.max(longestStr, right - left);
  return longestStr || -1;
}

console.log(findLongestSubstring("abcdbea")); // 5
console.log(findLongestSubstring("aba")); // 2
console.log(findLongestSubstring("abccabcabcc")); // 3
console.log(findLongestSubstring("aaaabaaa")); // 2
console.log(findLongestSubstring("bbbbb")); // 1