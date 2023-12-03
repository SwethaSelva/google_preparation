/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow1(s, t) {
  if (s.length < t.length || !t.length) return '';

  let hash = {};
  for (const char of t) hash[char] = (hash[char] || 0) + 1;

  let left = 0;
  let minRange = [-Infinity, Infinity];
  while (!(s[left] in hash)) {
    if (left >= s.length) return '';
    left++;
  }
  hash[s[left]] -= 1;

  let r_count = t.length - 1;
  let right = left;
  while (left <= right) {
    // sink
    while (!r_count && left <= right) {
      if (right - left + 1 === t.length) return s.slice(left, right + 1);
      if (minRange[1] - minRange[0] > right - left) minRange = [left, right];

      let prevLeftChar = s[left];
      left++;
      while (!(s[left] in hash)) left++;
      if (left >= s.length) return s.slice(minRange[0], minRange[1] + 1);
      if (left >= right) right = left;

      hash[prevLeftChar] += 1;
      if (hash[prevLeftChar] > 0) r_count++;
    }
    // expand
    right++;
    while (!(s[right] in hash) && right < s.length) right++;
    if (right >= s.length) break;

    if (hash[s[right]] > 0) r_count--;
    hash[s[right]] -= 1;
  }
  if (!r_count && minRange[1] - minRange[0] > right - left) return s.slice(left, right + 1);
  if (minRange[0] === -Infinity && minRange[1] === Infinity) return '';
  return s.slice(minRange[0], minRange[1] + 1);
}

function minWindow(str1, str2) {
  let hashStr1 = {};
  let windowHash = {};
  for (let char of str2) {
    hashStr1[char] = (hashStr1[char] || 0) + 1;
    windowHash[char] = 0;
  }

  let leftPtr = 0;
  while (!hashStr1[str1[leftPtr]]) leftPtr++;

  let count = 1;
  if (str2.length === count) return str1[leftPtr];

  let result = [-Infinity, Infinity];
  let len = Infinity;
  for (let rightPtr = leftPtr + 1; rightPtr < str1.length; rightPtr++) {
    let char = str1[rightPtr];
    if (char in windowHash) {
      windowHash[char] += 1;
      if (windowHash[char] <= hashStr1[char]) count++;
      console.log({ count })
    }
    if (count === str2.length) {
      console.log({ windowHash })
      let prevChar = str1[leftPtr];
      while (!hashStr1[prevChar] || windowHash[prevChar] > hashStr1[prevChar]) {
        leftPtr++;
        prevChar = str1[leftPtr];
        windowHash[prevChar] -= 1;
      }
console.log({ leftPtr, rightPtr, hashStr1 })
      if (len > rightPtr - leftPtr + 1) {
        len = rightPtr - leftPtr + 1;
        result = [leftPtr, rightPtr];
      }

      count--;
      leftPtr++;
      windowHash[prevChar] -= 1;
    }
  }
  return len === Infinity ? '' : str1.slice(result[0], result[1] + 1);
}
// console.log(minWindow("ABCD", "ABC")); // ABC
// console.log(minWindow("XYZYX", "XYZ")); // XYZ
// console.log(minWindow("ABXYZJKLSNFC", "ABC")); // ABXYZJKLSNFC
// console.log(minWindow("AAAAAAAAAAA", "A")); // A
console.log(minWindow("ABFDFGDCKAB", "ABCD")); // DCKAB
console.log(minWindow("bba", "ab"));  // 'ba'
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
console.log(minWindow("acbbaca", "aba")); // baca
// console.log(minWindow('aaflslflsldkalskaaa', 'aaa')); // aaa