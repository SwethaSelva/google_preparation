function firstBadVersion(n) {
  let count = 0;
  let left = 1;
  let right = n;
  let mid = 0;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    count++;
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return [left, count];
}

function firstBadVersion(n){
  let count = 0;
  let firstBadVersion = 0;
  let left = 1;
  let right = n;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    count++;
    if (isBadVersion(mid)) {
      firstBadVersion = mid;
      if (mid - 1 > 0 && !isBadVersion(mid - 1)) break;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [firstBadVersion, count];
}