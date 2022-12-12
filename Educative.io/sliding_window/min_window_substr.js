/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
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
      if (right - left + 1 === t.length) return s.slice(left, right+1);
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
console.log(minWindow("ABCD" , "ABC"));
console.log(minWindow("XYZYX" , "XYZ"));
console.log(minWindow("ABXYZJKLSNFC" , "ABC"));
console.log(minWindow("AAAAAAAAAAA" , "A"));
console.log(minWindow("ABFDFGDCKAB", "ABCD"));
console.log(minWindow("bba", "ab"));  // 'ba'
console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
console.log(minWindow("acbbaca", "aba")); // baca
console.log(minWindow('aaflslflsldkalskaaa', 'aaa')); // aaa