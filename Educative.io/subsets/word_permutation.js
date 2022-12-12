function permuteWord(word, result = '', allResult = []){
  if (word.length === 1) {
    allResult.push(result + word);
    return allResult;
  }
  for (let i = 0; i < word.length; i++) {
    allResult.push(...permuteWord(word.replace(word[i], ''), result + word[i]));
  }
  return allResult;
}

console.log(permuteWord("abcd"));
console.log(permuteWord("bad"));
console.log(permuteWord("ab"));
console.log(permuteWord("xyz"));
console.log(permuteWord("a"));