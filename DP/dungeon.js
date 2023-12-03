/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// var calculateMinimumHP = function (dungeon) {
//   let dp = Array.from({ length: dungeon.length }).map(() => new Array(dungeon[0].length).fill(0));
//   let rowLen = dungeon.length - 1;
//   let colLen = dungeon[0].length - 1;

//   for (let row = rowLen; row >= 0; row--) {
//     for (let col = colLen; col >= 0; col--) {
//       let curCelVal = dungeon[row][col];

//       // Right --> col + 1
//       let right = [0, 0];
//       let prevRight = dp[row][col + 1] || [0, 0];
//       let rem = curCelVal + prevRight[1];

//       if (curCelVal > 0 || rem > 0) {
//         right = [prevRight[0], rem];
//       } else {
//         right = [prevRight[0] + rem * -1 + 1, 1];
//       }

//        // Bottom --> row + 1
//       let bottom = [0, 0];
//       let prevBottom = row !== rowLen ? dp[row + 1][col] : [0, 0];
//       rem = curCelVal + prevBottom[1];

//       if (curCelVal > 0 || rem > 0) {
//         bottom = [prevBottom[0], rem]
//       } else {
//         bottom = [prevBottom[0] + rem * -1 + 1, 1];
//       }

//       // first row or col -- 0,1 or 1,0
//       if (row === rowLen || col === colLen) {
//         if (col !== colLen) dp[row][col] = [...right]
//         else dp[row][col] = [...bottom];
//       }

//       // dp[row][col] = min(right, bottom);
//       else {
//         if (right[0] <= bottom[0]) dp[row][col] = [...right];
//         else dp[row][col] = [...bottom];
//       }
//     }
//   }
// console.log({ dp: JSON.stringify(dp) })
//   return dp[0][0][0] || 1;
// };

var calculateMinimumHP = function(dungeon) {
  let rows = dungeon.length
  let cols = dungeon[0].length

  let dp = new Array(rows).fill().map(() => new Array(cols).fill(0))

  //fill bottom right corner
  dp[rows-1][cols-1] = dungeon[rows-1][cols-1] < 0 ? dungeon[rows-1][cols-1] : 0

  //fill last row
  for (let i=cols-2; i>=0; i--) dp[rows-1][i] = Math.min(0, dungeon[rows-1][i] + dp[rows-1][i+1])

  //fill last col
  for (let i=rows-2; i>=0; i--) dp[i][cols-1] = Math.min(0, dungeon[i][cols-1] + dp[i+1][cols-1])

  //fill the rest of the cells
  for (let i=rows-2; i>=0; i--) {
    for (let j=cols-2; j>=0; j--) {
      let rightDP = dp[i][j+1]
      let bottomDP = dp[i+1][j]

      dp[i][j] = Math.min(0, dungeon[i][j] + Math.max(rightDP, bottomDP))
    }
  }

  return Math.abs(dp[0][0]) + 1
};

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]])); // 7
console.log(calculateMinimumHP([[0]])); // 1
console.log(calculateMinimumHP([[1, -3, -4], [2, -1, 2]])); // 1
console.log(calculateMinimumHP([[1, -3, 3],[0, -2, 0],[-3, -3, -3]])); // 3