function letterCombinations(digits){
  let letter = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  let combs = [];
  formComb(digits);

  function formComb (digits, currentIdx = 0, result = '') {
    if (currentIdx >= digits.length) return combs.push(result);

    // To skip the '1'
    while (currentIdx < digits.length && !letter[digits[currentIdx]]) currentIdx++;

    let chars = letter[digits[currentIdx]];
    if (!chars) return combs;

    for (let i = 0; i < chars.length; i++) {
      formComb(digits, currentIdx+1, result + chars[i]);
    }
  }

  return combs;
}

console.log(letterCombinations("2"));
console.log(letterCombinations("73"));
console.log(letterCombinations("426"));
console.log(letterCombinations("78"));
console.log(letterCombinations("925"));
console.log(letterCombinations("39"));
console.log(letterCombinations("15"));
console.log(letterCombinations("1215"));