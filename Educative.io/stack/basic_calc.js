/**
 * @param {string} s
 * @return {number}
 */
function calculator1 (s) {
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
console.log(calculator('1 + 1')); // 2
console.log(calculator('1 + (-1)')); // 0
console.log(calculator('40 - 25 - 5')); // 10
console.log(calculator("(1+(4+5+2)-3)+(6+8)")); // 23
/**
 * @param {string} s
 * @return {number}
 */
function calculator(s) {
  s = s.replace(/\s/g, '');
  return recursive()[1];

  function recursive (curPos = 0) {
    let result = [];
    for (let i = curPos; i < s.length; i++) {
      if (s[i] === ')') return [i, result[0]];
      else if (s[i] === '-') result.push(-1);
      else if (s[i] === '+') result.push(1);
      else {
        let num = 0;
        if (s[i] === '(') {
          let returnRes = recursive(i + 1);
          num = returnRes[1];
          i = returnRes[0];
        } else {
          let str = ''
          while (Number.isInteger(+s[i])) str += s[i++];
          i--;
          num = +str
        }
        if (result.length) num *= result.pop();
        if (result.length) num += result.pop();
        result.push(num);
      }
      console.log({ result })
    }
    console.log('end', result)
    return [0, result[0]];
  }
};
