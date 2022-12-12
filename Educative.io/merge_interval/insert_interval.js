function insertInterval(existingIntervals, newInterval) {
  let result = [];
  let isMerged = false;

  let curInterval = existingIntervals[0];
  for (let i = 1; i < existingIntervals.length; i++) {
    if (
      !(isMerged
        || (curInterval.start < newInterval.start && curInterval.end < newInterval.start) // not intersected
        || (curInterval.start > newInterval.start && curInterval.start > newInterval.end) // not intersected
      )
    ) {
      curInterval = [Math.min(curInterval.start, newInterval.start), Math.max(curInterval.end, newInterval.end)];
      isMerged = true;
    }

    if (curInterval.end >= existingIntervals[i].start || curInterval.end >= existingIntervals[i].end) {
      curInterval.end = Math.max(existingIntervals[i].end, curInterval.end);
    } else {
      result.push(curInterval);
      curInterval = existingIntervals[i];
    }
  }
  result.push(curInterval);
  if (!isMerged) result.push(newInterval);
  return result;
}

console.log(insertInterval([[1, 2], [3, 4], [5, 8], [9, 15]], [2, 5])); // [ [ 1, 8 ], [ 9, 15 ] ]
console.log(insertInterval([[1, 6], [8, 9], [10, 15], [16, 18]], [9, 10])); // [ [ 1, 15 ], [ 16, 18 ] ]
console.log(insertInterval([[1, 2], [3, 4], [5, 8], [9, 15]], [16, 17])); // [ [ 1, 17 ] ]
console.log(insertInterval([[1, 4], [5, 6], [7, 8], [9, 10]], [1, 5])); // [ [ 1, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log(insertInterval([[1, 3], [4, 6], [7, 8], [9, 10]], [1, 10])); // [ [ 1, 10 ] ]
console.log(insertInterval([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]], [3, 5])); // [ [ 1, 6 ], [ 7, 8 ], [ 9, 10 ] ]