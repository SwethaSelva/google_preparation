/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];

    let rowStart = 0;
    let rowEnd = matrix[0].length;
    let colStart = 0;
    let colEnd = matrix.length;
    while (result.length < matrix.length * matrix[0].length) {
        let colPtr = colStart;
        let rowPtr = rowStart;
        // Right
        while (rowPtr < rowEnd && result.length < matrix.length * matrix[0].length) {
            result.push(matrix[colPtr][rowPtr]);
            rowPtr++;
        }
        // Down
        rowPtr--;
        colPtr++;
        while (colPtr < colEnd && result.length < matrix.length * matrix[0].length) {
            result.push(matrix[colPtr][rowPtr]);
            colPtr++;
        }
        // Left
        colPtr--;
        rowPtr--;
        while (rowPtr >= rowStart && result.length < matrix.length * matrix[0].length) {
            result.push(matrix[colPtr][rowPtr]);
            rowPtr--;
        }
        // Up
        rowPtr++;
        colPtr--;
        while (colPtr > colStart && result.length < matrix.length * matrix[0].length) {
            result.push(matrix[colPtr][rowPtr]);
            colPtr--;
        }
        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;
    }
    return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
console.log(spiralOrder([[1,2,3,4]]));
console.log(spiralOrder([[1],[2],[3],[4]]));