/**
 * overlapped - [s1, e1], [s2, e2]
 * @condition
 *  s1 >= s2 && e1 <= e2
 * si < sj < ei 
 *  s2 >= e1 || s1 >= e2
 */
// Move - whichever end is small, list1 ei < sj - i++ and vice versa
function intervalsIntersection(intervalListA, intervalListB) {
  if (!intervalListA.length || !intervalListB.length) return [];
  
  let result = [];
  let listAPtr = 0;
  let listBPtr = 0;
  while (listAPtr < intervalListA.length && listBPtr < intervalListB.length) {
    let [sA, eA] = intervalListA[listAPtr];
    let [sB, eB] = intervalListB[listBPtr];
    // overlap
    let start = Math.max(sA, sB);
    let end = Math.min(eA, eB);
    if (start <= end) result.push([start, end]);
    // if (sA <= sB && eA >= sB) result.push([sB, Math.min(eA, eB)]);
    // else if (sB <= sA && eB >= sA) result.push([sA, Math.min(eA, eB)]);

    // Move
    if (eA < eB) listAPtr++;
    else if (eA > eB) listBPtr++;
    else {
      listAPtr++;
      listBPtr++;
    }
  }
  return result;
}

console.log(intervalsIntersection([[1,4],[5,6],[7,8],[9,15]] , [[2,4],[5,7],[9,15]])); // [[2, 4], [5, 6], [7, 7], [9, 15]]
console.log(intervalsIntersection([[1,3],[4,6],[8,10],[11,15]] , [[2,3],[10,15]]));
console.log(intervalsIntersection([[1,2],[4,6],[7,8],[9,10]] , [[3,6],[7,8],[9,10]]));
console.log(intervalsIntersection([[1,3],[5,6],[7,8],[9,10],[12,15]] , [[2,4],[7,10]])); // [2,3], [7,8], [9,q0]
console.log(intervalsIntersection([[1,2]] , [[1,2]])); // [1,2]