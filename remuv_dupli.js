/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let lastIdxHash = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    lastIdxHash[char] = i;
  }
console.log({ lastIdxHash })
  let stack = [];
  let visited = new Set();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!(char in lastIdxHash)) continue;

    while (stack.length && stack.at(-1) >= char) {
      let lastChar = stack.at(-1);
      if (!(lastChar in lastIdxHash)) break;
      visited.delete(stack.pop());
    }

    if (lastIdxHash[char] <= i) delete lastIdxHash[char];
    if (!visited.has(char)) stack.push(char);
    visited.add(char);
  }
  return stack.join('');
};

console.log(removeDuplicateLetters("zaddca")); // "zadc"