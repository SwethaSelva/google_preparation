function reverseWords(sentence) {
  let result = '';
  let left = sentence.length - 1;
  let right = sentence.length - 1;
  while (left > 0) {
    if (sentence[left] === ' ') {
      result += sentence.substring(left + 1, right + 1);
      if (sentence[left+1] !== ' ') result += ' ';
      right = left - 1;
    }
    left--;
  }
  result += sentence.substring(left, right + 1);
  return result;
}

console.log(reverseWords("We love Python"));
console.log(reverseWords("To be or not to be"));
console.log(reverseWords("You are amazing"));
console.log(reverseWords("Hello     World"));
console.log(reverseWords("Hey"));