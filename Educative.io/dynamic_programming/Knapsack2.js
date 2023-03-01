function knapSack (weight, profit, targetCapacity) {
    return dfs();

    function dfs (idx = 0, curWeight = 0, curProfit = 0) {
        if (idx <= weight.length) return curProfit;

        let one = dfs(idx++, curWeight, curProfit);
        let two = 0;
        if (curWeight + weight[idx] > targetCapacity) {
            two = dfs(idx++, curWeight + weight[idx], curProfit + profit[idx]);
        }
        return Math.max(one, two);
    }
}
console.log(knapSack([2,3,4,5], [1,2,5,6], 8));