function groupAnagrams(strs){
  if (!strs.length) return [[]];
  let hash = {};
  for (let i = 0; i < strs.length; i++) {
    let alphaArr = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      let charCode = strs[i].charCodeAt(j) - 97;
      alphaArr[charCode] += 1;
    }
    let key = alphaArr.reduce((acc, cur) => acc += cur + '-', '');
    console.log({ alphaArr, key })
    if (!hash[key]) hash[key] = [];
    hash[key].push(strs[i]);
  }
  return Object.values(hash);
}

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(["word","sword","drow","rowd","iced","dice"]));
// console.log(groupAnagrams(["eat","drink","sleep","repeat"]));
// console.log(groupAnagrams(["hello","ohlle","dark"]));
// console.log(groupAnagrams(["eat","beat","neat","tea"]));
console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]));