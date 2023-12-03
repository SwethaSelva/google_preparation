function LCS (s1, s2) {
  let result = 0;
  dfs();

  function dfs (s1Idx = 0, s2Idx = 0, sum) {
    if (s1Idx >= s1.length || s2Idx >= s2.length) return 0;
  
    if (s1[s1Idx] === s2[s2Idx]) {
      result = Math.max(result, sum + 1);
      dfs(s1Idx + 1, s2Idx + 1, sum + 1);
    } else {
      dfs(s1Idx + 1, s2Idx, sum);
      dfs(s1Idx, s2Idx + 1, sum);
    }
  }
}

console.log(subset('nematodeknowledge', 'nano')); // true
console.log(subset('answe', 'nano')); // false