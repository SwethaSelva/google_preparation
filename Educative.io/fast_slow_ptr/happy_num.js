function isHappyNumber(n) {
  if (n === 1) return true;
  let slowPointer = n;
  let fastPointer = n;
  do {
    if (slowPointer === 1 || fastPointer === 1) return true;
    slowPointer = sumOfDigit(slowPointer);
    fastPointer = sumOfDigit(sumOfDigit(fastPointer));
  } while (slowPointer !== fastPointer)
  return false;
}

function sumOfDigit (n) {
  let result = 0;
  while (n) {
    result += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  console.log(result)
  return result;
}

console.log(isHappyNumber(19)); // true
/**
 * sumOfDigit 
 *  loop till num != 0
 *    num / 10, num % 10 
 *  digit ** 2
 * 
 * 
 * occuredNums -> hash - key: num - value: sumOfDigit
 * 
 * sumOfDigit twice
 * 
 * push it to hash;
 * 
 * 
 * Recursive fashion
 *  arg --> hash = {}, 
 *  slow pointer --> sumOfDigit
 *  fast pointer --> sumOfDigit(sumOfDigit)
 *  
 * 
 */