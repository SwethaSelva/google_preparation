function rescueBoats(people, limit){
  let boatCount = 0;
  people = people.sort((a,b) => a - b);
  let left = 0;
  let right = people.length - 1;
  while (left <= right) { 
    if (people[right] + people[left] <= limit) left++;
    right--;
    boatCount++;
  }
  return boatCount;
}

console.log(rescueBoats([3,1,4,2,4] , 4)); // 4
console.log(rescueBoats([1,1,1,1,2] , 3)); // 3
console.log(rescueBoats([1,2] , 3)); // 1
console.log(rescueBoats([5,5,5,5] , 5)); // 4
console.log(rescueBoats([3,2,5,5] , 5)); // 3