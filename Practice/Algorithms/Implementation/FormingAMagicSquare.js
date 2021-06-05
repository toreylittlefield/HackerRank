/**
 * Link: https://www.hackerrank.com/challenges/magic-square-forming/problem
 * Type: Algorithms: Implementation
 * Difficulty: Medium
 * Name: Forming a Magic Square
 */

// Returns int: the minimal total cost of converting the input square to a magic square

// input int s[3][3]: a 3 x 3  array of integers

// Example 1: Expect 7 
// const s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

// Example 2: Expect 1
// const s = [[4, 9, 2],[3, 5, 7],[8, 1, 5]]

// Example 3: Expect 4
// const s = [[4, 8, 2],[4, 5, 7],[6, 1, 6]];

// Example 4: Expect 14
const s = [[4, 5, 8],[2, 4, 1],[1, 9, 7]]
        // [4, 5, 8] = 17 - 15 = 2
        // [2,4,1] = 7 - 15 = 8
        // [1,9,7] = 17 - 15 = 2 ---> 12
// x = 4
// x + 1 = [5 - 4] = 1
// x - 1 = [3 - 7] = 4
// x + 3 = [7 - 1] = 6
// x - 3 = [1 - 8] = 7

function formingMagicSquare(s) {
    // Write your code here
    // const x = s[1][1];
    // const xPlus1 = (x + 1) - s[0][0];
    // const xMinus1 = (x - 1) - s[2][2];
    // const xPlus3 = (x + 3) - s[2][0];
    // const xMinus3 = (x - 3) - s[0][2];
    // const array = [xPlus1, xMinus1, xPlus3, xMinus3]
    // console.log(array)
    let totalCostMoves = 0;
    s.forEach( col => {
        const sumCol = col.reduce((acc, num) =>  acc + num);
        console.log(sumCol)
        totalCostMoves += Math.abs(15 - sumCol);
    })
    return totalCostMoves
};

console.log(formingMagicSquare(s));