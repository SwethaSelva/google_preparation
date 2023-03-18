/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
*/
var findAnagrams = function(s, p) {
    let result = [];
    if (s.length < p.length) return result;

    let pHash = {}; // { char: count }
    if (p.length === 1) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === p[0]) result.push(i);
        }
        return result;
    }
    for (let char of p) pHash[char] = (pHash[char] || 0) + 1;

    let startIdx = 0;
    let trackerHash = {}; // { char: [count, [idx1,.., idxn]] }
    
    for (let i = 0; i < s.length; i++) {
        // Reset
        while (!pHash[s[i]] && i < s.length) {
            startIdx = ++i;
            trackerHash = {};
        }
        let char = s[i];
        if (trackerHash[char] && trackerHash[char][0] >= pHash[char]) {
            let val = trackerHash[char][1].shift();
            trackerHash[char][0]--;
            if (val >= startIdx) startIdx = val + 1;
        }

        if (!trackerHash[char]) trackerHash[char] = [0, []];
        trackerHash[char][1].push(i);
        trackerHash[char][0]++;
        if (i - startIdx + 1 === p.length) result.push(startIdx);
    }
    return result;
};


console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams('acdcaeccde', 'c')); // [1,3,6,7]
console.log(findAnagrams("abacbabc", "abc")); // [1,2,3,5]
console.log(findAnagrams("abab", "ab")); // [0,1,2]
console.log(findAnagrams("baa", "aa")); // [1]
console.log(findAnagrams("bb", "aa")); // []
console.log(findAnagrams("abaaba", "aa")); // [2]
console.log(findAnagrams("aaaaaaaaaaaaaaa", "aa")); // [0,1,2,3,4,5,6,7,8,9,10,11,12,13]