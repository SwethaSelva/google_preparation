var change = function(amount, coins) {
    coins.sort((a, b) => a - b);
    let result = 0;

    function backtracking (remAmt = amount, curPos = 0) {
        if (curPos >= coins.length || remAmt <= 0) {
            if (remAmt === 0) result++;
            return result;
        }

        for (let i = curPos; i < coins.length; i++) {
            if (coins[i] > remAmt) break;
            backtracking(remAmt - coins[i], i);
        }
    }
    backtracking();
    return result;
};

console.log(change(5, [1,5,2]));
console.log(change(500, [3,5,7,8,9,10,11]));