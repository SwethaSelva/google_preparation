let DIR = [[100, 0], [75, 25], [50, 50], [25, 75]];
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n > 4800) return 1;
    // const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let result = 0;
    return dfs();

    function dfs (a = n, b = n) {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;

        let curResult = 0
        for (let i = 0; i < DIR.length; i++) {
            curResult += dfs(a - DIR[i][0], b - DIR[i][1]);
        }
console.log(curResult * 0.25)
        result += curResult * 0.25;
        return result;
    }
};

console.log(soupServings(100)); // 0.71875
// console.log(soupServings(50)); // 0.625