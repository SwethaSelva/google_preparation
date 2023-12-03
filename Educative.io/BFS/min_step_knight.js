/**
 * Given a destination coordinate [x, y], determine the minimum number of moves from [0, 0] to [x, y].
 */
const DIRS = [[2, 1], [-2, 1], [2, -1], [-2, -1],[1, 2], [1, -2], [-1, 2], [-1, -2]];
function getKnightShortestPath(x, y) {
    x = Math.abs(x), y = Math.abs(y);
    let q = [[0,0,0]];
    let minSteps = Infinity;
    let visited = new Set();
    while (q.length) {
        let [row, col, steps] = q.shift();
        if (minSteps < steps) continue;
        if (x === row && y === col) return steps;
        

        for (let i = 0; i < DIRS.length; i++) {
            let adjRow = row + DIRS[i][0];
            let adjCol = col + DIRS[i][1];
            let key = `${adjRow}-${adjCol}`;

            if (visited.has(key)) continue;
            visited.add(key);
            
            q.push([adjRow, adjCol, steps + 1]);
        }
    }
    return minSteps === Infinity? 0: minSteps;
}