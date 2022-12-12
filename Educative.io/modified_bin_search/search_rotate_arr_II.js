function search(arr, t) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[start] === t) return true;
    if (arr[end] === t) return true;
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === t) return true;

    if (arr[start] > arr[mid]) {
      if (arr[mid] > t) end = mid - 1;
      else {
        if (arr[start] < t) end = mid - 1;
        else start = mid + 1;
      }
    } else {
      if (arr[start] < t && arr[mid] > t) end = mid - 1
      else start = mid + 1;
    }
  }
  return false;
}

console.log(search([-14,16,19,22,67] , 19)); // true
console.log(search([-71,-33,-11,-10,1,6] , 10)); // false
console.log(search([-13,3,12,13,19,57] , 19)); // true
console.log(search([-2,0,1,2,4,5,6] , 3)); // false
console.log(search([2,5,6,0,0,1,2] , 0)); // true
console.log(search([-100, -88, -44, -20, -6, -1] , -20)); // true