function largeSqrSubArr (arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (!arr[i][j]) continue;
            largest = Math.max(largest, helper(arr, i, j));
        }
    }
    return largest;
}

// Recursive
function helperRecursive (arr, row = 0, col = 0) {
    if (row >= arr.length || col >= arr[0].length || row < 0 || col < 0 || !arr[row][col]) return 0;
    return 1 + Math.min(
        helper(arr, row+1, col+1),
        helper(arr, row, col+1),
        helper(arr, row + 1, col)
    );
}

// Top-down approach
function helper (arr, row = 0, col = 0, cache = new Array(arr.length * arr[0].length)) {
    if (row >= arr.length || col >= arr[0].length || row < 0 || col < 0 || !arr[row][col]) return 0;

    let dial = cache[(row + 1) * arr[0].length + col + 1] || helper(arr, row+1, col+1);
    let right = cache[(row + 1) * arr[0].length + col] || helper(arr, row+1, col);
    let down = cache[row * arr[0].length + col + 1] || helper(arr, row, col+1);

    return 1 + Math.min(dial, right, down);
}

// Bottom - up approach
function largeSqrSubArr (arr) {
    let maxResult = 0;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[0].length; col++) {
            if (!arr[row][col]) arr[row][col] = 0;
            else {
                if (row === 0 || col === 0) continue;
                // arr[row-1] = arr[row-1] || [];
                else arr[row][col] = 1 + Math.min(arr[row-1][col-1] || 0, arr[row][col-1] || 0, arr[row-1][col] || 0);
            }
            maxResult = Math.max(maxResult, arr[row][col]);
        }
    }
    return maxResult; 
}

console.time('start')
console.log(largeSqrSubArr(
    [
        [0,1,0,0],
        [1,1,1,1],
        [0,1,1,0],
    ]
));
console.timeEnd('start');
console.log(largeSqrSubArr(
    [
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
    ]
));

console.log(largeSqrSubArr(
    [
        [1,1],[1,1],[1,0]
    ]
));

/**
 * 0 1 2
 * 3 4 5
 * 6 7 8
 */