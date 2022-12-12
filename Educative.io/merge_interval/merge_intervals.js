function mergeIntervals(v) {
  let result = [];
  let curInterval = v[0];
  for (let i = 1; i < v.length; i++) {
    if (curInterval[1] >= v[i][0] || curInterval[1] >= v[i][1]) {
      curInterval[1] = Math.max(curInterval[1], v[i][1]);
    } else {
      result.push(curInterval);
      curInterval = v[i];
    }
  }
  result.push(curInterval);
  return result;
}

console.log(mergeIntervals([[1,5],[3,7],[4,6]]));
console.log(mergeIntervals([[1,5],[4,6],[6,8],[11,15]]))
console.log(mergeIntervals([[3,7],[6,8],[10,12],[11,15]]));
console.log(mergeIntervals([[1,5]]));
console.log(mergeIntervals([[1,4],[4,5]]));
console.log(mergeIntervals([[1,9],[4,4],[3,8]]));
console.log(mergeIntervals([[1,2],[3,4],[8,8]]));