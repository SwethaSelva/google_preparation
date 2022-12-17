/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

};

function findClosetSmall(intervals, target) {
  let start = 0;
  let end = intervals.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === interval[mid][0]) return mid;
    else if (intervals[mid][0] < target) left = mid + 1;
    else right = mid - 1;
  }
  return mid;
}