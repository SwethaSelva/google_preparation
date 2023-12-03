/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let min = Infinity;

  function dfs(w1Ptr = 0, w2Ptr = 0, count = 0) {
    // console.log({ w1Ptr, w2Ptr, count })
    if (w1Ptr === word1.length || min < count) return min;
    if (w2Ptr === word2.length) {
      count += word1.length - w1Ptr;
      min = count;
    }

    if (word1[w1Ptr] === word2[w2Ptr]) return dfs(w1Ptr + 1, w2Ptr + 1, count);
    // replace
    dfs(w1Ptr + 1, w2Ptr + 1, count + 1);
    // delete
    dfs(w1Ptr + 1, w2Ptr, count + 1);
    //insert
    dfs(w1Ptr, w2Ptr + 1, count + 1);
  }
  dfs();
  return min;
}

console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5