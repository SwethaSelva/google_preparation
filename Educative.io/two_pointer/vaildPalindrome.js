  function isPalindrome(s) {
    let isFirstMismatch = false;
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
      if (s[start] !== s[end]) {
        if (isFirstMismatch) return false;
        if (s[start+1] === s[end]) {
          isFirstMismatch = true;
          start++;
        } else if (s[start] === s[end - 1]) {
          isFirstMismatch = true;
          end--;
        } else return false;
      }
      start++;
      end--;
    }
    return true;
  }

console.log(isPalindrome('abaaba'));
console.log(isPalindrome('abaabb'));
console.log(isPalindrome('abeabb'));
console.log(isPalindrome('abebb'));

'acabaa'

/**
 * str is palindrome
 * empty "" 
 * pseudo code
 * 1. start, end
 * loop - start < end
 *  if the char is mismatching
 *    if (flag) return true;
 *    if start + 1 match, make the flag true
 *    else if end - 1 match, make the flag true
 *    return false;
 */