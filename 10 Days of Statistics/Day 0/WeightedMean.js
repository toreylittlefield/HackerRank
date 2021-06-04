/*
 * Link: https://www.hackerrank.com/challenges/s10-weighted-mean/problem
 * Type: Statistics
 * Difficulty: --
 * Name: Day 0: Weighted Mean
 */

// input 

// Example 1: Expect 32.0
const X = [10, 40, 30, 50, 20]; // data
const W = [1, 2, 3, 4, 5]; // weights


/**
 * @param {Number[]} X the data as an array of ints
 * @param {Number[]} W the weights as an array of ints
 * @returns the weighted mean
 */
function weightedMean(X, W) {
    const [numerator, denominator] = X.reduce((acc, curX, idx) => {
        acc[0] = acc[0] + (curX * W[idx]);
        acc[1] = acc[1] + W[idx];
        return acc;
    },
    [0,0]
    );
    const weightedMean = numerator / denominator;
    return weightedMean.toFixed(1)
}

console.log(weightedMean(X,W))