var canFinish = function(numCourses, prerequisites) {
  if (!prerequisites.length) return true;

  let depCourse = {};
  let inDegree = {};
  for (let prereq of prerequisites) {
    if (prereq[0] === prereq[1]) return false;

    if (!depCourse[prereq[1]]) depCourse[prereq[1]] = [];
    depCourse[prereq[1]].push(prereq[0]);

    if (!inDegree[prereq[0]]) inDegree[prereq[0]] = 0;
    inDegree[prereq[0]] += 1;
  }

  let q = [];
  for (let i = 0; i < numCourses; i++) {
    if (!inDegree[i]) q.push(i);
  }

  while (q.length) {
    let curCourse = q.shift();
    if (!depCourse[curCourse]) continue;
    for (let child of depCourse[curCourse]) {
      inDegree[child] -= 1;
      if (inDegree[child] < 1) q.push(child);
    }
    delete depCourse[curCourse];
  }
  return !Object.keys(depCourse).length;
};


console.log(canFinish(2 , [[1,0],[0,1]])); // false
console.log(canFinish(5 , [[1,0],[2,1],[3,2],[4,3]])); // true
console.log(canFinish(5 , [[1,0],[2,1],[3,2],[4,3],[0,4]])); // false
console.log(canFinish(41 , [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],[37,38],[38,39],[39,40],[40,0]])); // false
console.log(canFinish(5 , [[2,0],[2,1],[3,2],[4,2]])); // true
console.log(canFinish(20, [[0,10],[3,18],[5,5], [6,11],[11,14],[13,1],[15,1],[17,4]])); // false
console.log(canFinish(4, [[1,0], [1,2], [0,1]])); // false
console.log(canFinish(3, [[1,0],[1,2],[0,1]])); // false