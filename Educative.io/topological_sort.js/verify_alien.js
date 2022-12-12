/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted1 = function(words, order) {
  if (!words.length) return true;
  let depGraph = {};

  for (let i = 1; i < words.length; i++) {
      if (words[i-1] === words[i]) continue;
    let counter = 0;
    let minLength = Math.min(words[i-1].length, words[i].length);
    while (counter < minLength) {
      if (words[i-1][counter] !== words[i][counter]) break;
      counter++;
    }

    if (!words[i][counter]) return false;

    if (!words[i-1][counter]) continue;
    if (!depGraph[words[i][counter]]) depGraph[words[i][counter]] = [];
    depGraph[words[i][counter]].push(words[i-1][counter]);
  }

  let visited = {};
  for (let i = 0; i < order.length; i++) {
    if (depGraph[order[i]]) {
      for (let dep of depGraph[order[i]]) {
        if (!visited[dep]) return false;
      }
    }
    visited[order[i]] = true;
  }
  return true;
};

var isAlienSorted = function(words, order) {
  let alphaOrder = {}
  for (let i = 0; i < order.length; i++) {
    alphaOrder[order[i]] = i;
  }

  for (let i = 1; i < words.length; i++) {
    if (words[i-1] === words[i]) continue;
    
    let minLen = Math.min(words[i-1].length, words[i].length);
    let counter = 0;
    while (counter < minLen) {
      if (words[i-1][counter] !== words[i][counter]) break;
      counter++;
    }
    const char1 = words[i-1][counter];
    const char2 = words[i][counter];
    if (!char2) return false;
    if (!char1) continue;

    if (alphaOrder[char1] > alphaOrder[char2]) return false;
  }
  return true;
}
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")); // false
console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
console.log(isAlienSorted(["app","apple"], 'abcdefghijklmnopqrstuvwxyz')); // true