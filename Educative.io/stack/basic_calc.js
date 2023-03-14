/**
 * @param {string} s
 * @return {number}
 */
function calculator (s) {
  let stack = [];
  let number = 0;
  let sign = 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) number = number * 10 + parseInt(s[i]);
    else if (s[i] === '-' || s[i] === '+') {
      result += number * sign;

      sign = s[i] === '-'? -1: 1;
      number = 0;
    } else if (s[i] === '(') {
      stack.push(result);
      stack.push(sign);

      result = 0;
      sign = 1;
    } else if (s[i] === ')') {
      result += number * sign;

      let curSign = stack.pop();
      result *= curSign;

      let curNum = stack.pop();
      result += curNum;

      sign = 1;
      number = 0;
    }
  }
  return result + number * sign;
}

console.log(calculator('27+((-1)+(7-(-12)-(1+7))+(-1))')); // 27 - 1 + 19 - 8 - 1 = 27 + 9 = 36
console.log(calculator('1 + 1'));
console.log(calculator('1 + (-1)'));
console.log(calculator('40 - 25 - 5')); // 10