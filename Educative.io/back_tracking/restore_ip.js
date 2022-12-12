const IP_SEGEMENTS = 4;
const VALID_SEG_LEN = 3

function isValid (s, prev = '', numStr = '', pos = 1, start = 0) {
  // Check num range is b.w 0 to 255
  let num = parseInt(numStr);
  if (num === NaN || `${num}`.length !== numStr.length || num < 0 || num > 255) return false;
  if (parseInt(prev) !== NaN && num <= parseInt(prev))  return false;

  // Check remaining char is enough for other seg formation.
  const remainingLen = s.length - start - 1;
  const remainingSeg = IP_SEGEMENTS - pos;
  return remainingLen >= remainingSeg && remainingLen <= remainingSeg * VALID_SEG_LEN;
}

function restoreIpAddresses(s, pos = 1, start = 0, result = [], curStr = ''){
  if (start >= s.length) {
    if (curStr.length && pos === IP_SEGEMENTS + 1) result.push(curStr);
    return result;
  }
  let num = '';
  for (let i = start; num.length < VALID_SEG_LEN; i++) {
    let prev = num;
    num += s[i];
    if (!isValid(s, prev, num, pos, i)) continue;
    num = `${parseInt(num)}`;
    let appended = num;
    if (curStr.length) appended = `${curStr}.${num}`;
    restoreIpAddresses(s, pos + 1, i + 1, result, appended);
  }
  return result;
}

console.log(restoreIpAddresses('121212121'));
console.log(restoreIpAddresses('255255313'));
console.log(restoreIpAddresses('010010')); // ["0.10.0.10", "0.100.1.0"]
/**
 * '1.21.212.121', '1.212.12.121', '12'
 */