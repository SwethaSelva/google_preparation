function findRepeatedSequences (s, k) {
  if (s.length <= k) return [];
  let hash = {};
  let subSeq = 0;
  let output = new Set();
  for (let i = 0; i < k; i++) subSeq += hashCalc(s[i], k - i - 1);
  hash[subSeq] = true;
  
  for (let start = k; start < s.length; start++) {
    subSeq *= 4;
    subSeq -= hashCalc(s[start - k], k);
    subSeq += hashCalc(s[start], 0);
    if (hash[subSeq]) {
      let subStr = s.substring(start - k + 1, start + 1);
      if (!output.has(subStr)) output.add(subStr);
    }
    hash[subSeq] = true;
  }
  return [...output];
}

function hashCalc(char, position) {
  let basicAllocation = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 };
  return basicAllocation[char] * (4 ** position);
}

console.log(findRepeatedSequences('ACGT', 2)); // ["AAAACCCC", "AAACCCCC", "AAAAACCC"]
console.log(findRepeatedSequences('AAAAACCCCCAAAAACCCCCC', 8)); // ["AAAACCCC", "AAACCCCC", "AAAAACCC"]
console.log(findRepeatedSequences("GGGGGGGGGGGGGGGGGGGGGGGGG" , 12));
console.log(findRepeatedSequences("TTTTTCCCCCCCTTTTTTCCCCCCCTTTTTTT" , 10));
console.log(findRepeatedSequences("AAAAAACCCCCCCAAAAAAAACCCCCCCTG" , 10));
console.log(findRepeatedSequences("ATATATATATATATAT" , 6));
