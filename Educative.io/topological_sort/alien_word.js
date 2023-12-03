function alienOrder(words){
  if (words.length < 1) return [...new Set(words[0])];

  let result = '';
  let inDegree = {};
  let adjGraph = {};
  for (let i = 0; i < words[0].length; i++) {
    inDegree[words[0][i]] = 0;
    adjGraph[words[0][i]] = [];
  }

  for (let i = 1; i < words.length; i++) {
    let maxLen = Math.max(words[i-1].length, words[i].length);
    let isFirstDiffChar = false;
    for (let j = 0; j < maxLen; j++) {
      if (words[i][j]) {
        if (!inDegree[words[i][j]]) inDegree[words[i][j]] = 0;
        if (!adjGraph[words[i][j]]) adjGraph[words[i][j]] = [];
      }

      if (words[i-1][j]) {
        if (!inDegree[words[i-1][j]]) inDegree[words[i-1][j]] = 0;
        if (!adjGraph[words[i-1][j]]) adjGraph[words[i-1][j]] = [];
      }

      if (!isFirstDiffChar && words[i-1] !== words[i]) {
        let char1 = words[i - 1][j] || words[i - 1][j - 1];
        if (words[i][j] && char1 !== words[i][j]) {
          inDegree[words[i][j]] += 1;
          adjGraph[char1].push(words[i][j]);
          isFirstDiffChar = true;
        }
      }
    }
  }

  let q = [];
  for (let char in inDegree) {
    if (inDegree[char] === 0) q.push(char);
  }

  while (q.length) {
    let curChar = q.shift();
    result += curChar;
    if (!adjGraph[curChar] || !adjGraph[curChar].length) continue;

    for (let childChar of adjGraph[curChar]) {
      inDegree[childChar] -= 1;
      if (inDegree[childChar] === 0) q.push(childChar);
    }
  }

  if (result.length !== Object.keys(adjGraph).length) return '';
  return result;
}

console.log(alienOrder(["xro","xma","per","pert","oxh","olv"])); // xraethvplmo
console.log(alienOrder(["m", "mx", "mxe", "mxer", "mxerl", "mxerlo", "mxerlos", "mxerlost", "mxerlostr", "mxerlostrpq", "mxerlostrp"])); 