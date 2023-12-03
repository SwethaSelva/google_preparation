var minSteps = function(n) {
  if (n === 1) return 0;

  let memo = new Map();
  return topDown(1, 1);

  function topDown(screenLen, buffer, count = 1) {
    if (screenLen === n) return count;
    if (count > n || screenLen > n) return Infinity;

    let key = `${screenLen}-${count}`;
    if (!memo.get(key)) {
      memo.set(key, Math.min(
        // paste
        topDown(screenLen + buffer, buffer, count + 1),
        // copy
        topDown(screenLen, screenLen, count + 1)
      ));
    }
// console.log({ memo })
    return memo.get(key);
  }
};

// console.log(minSteps(50)); // 12
// console.log(minSteps(6)); // 5
// console.log(minSteps(7)); // 7
// console.log(minSteps(8)); // 6
// console.log(minSteps(9)); // 6
// console.log(minSteps(10)); // 7
// console.log(minSteps(11)); // 11
// console.log(minSteps(12)); // 7
console.log(minSteps(24)); // 9
// console.log(minSteps(1000)); // 21
// console.log(minSteps(52)); // 17
console.time('997')
console.log(minSteps(997)); // 17
console.timeEnd('997')