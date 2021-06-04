/**
 * Link: https://www.hackerrank.com/challenges/permutation-equation/problem
 * Type: Algorithms: Implementation
 * Difficulty: Easy
 * Name: Sequence Equation
 */

// Returns int[n]: the values of y for all x in the arithmetic sequence 1 to n

// input p[n]: an array of intergers

// Example 1: Expect {2, 3, 1}
// const p = [2, 3, 1]

// Example 2: Expect {1, 3, 5, 4, 2}
const p = [4, 3, 5, 1, 2]

function permutationEquation(p) {
    // Write your code here
    return p.reduce((acc, cur, idx) => {
        const x = idx + 1;
        const pY = p[cur - 1];
        acc[pY - 1] = x;
         return acc;
    } , []);
};

console.log(permutationEquation(p));