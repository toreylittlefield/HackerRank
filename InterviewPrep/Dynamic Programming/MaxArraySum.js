/*
 * Link: https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
 * Type: Dynamic Programming
 * Difficulty: Medium
 * Name: Max Array Sum
 */

/**
 * Description:
 * Given an array of integers, find the subset of non-adjacent elements with the maximum sum.
 * Calculate the sum of that subset. 
 * It is possible that the maximum sum is 0, the case when all elements are negative.
 *  Note that any individual element is a subset as well.
 */

// Input int arr[n]: an array of integers

// Output - int: the maximum subset sum

// Example 1: Expect 13
const arr = [3, 7, 4, 6, 5]

// Example 2: Expect 11
// const arr = [2, 1, 5, 8, 4]

// Example 3: Expect 0 ** Special Negative Case
// const arr = [-2,-3,-1];

// Example 4: Expect 100
// const arr = [-1, -2, -3, -4, 5, 100, -7, -6]

function maxSubsetSum(arr) {
    // length of arr
    const n = arr.length;

    // edge case
    if(n === 1) {
        return Math.max(arr[0], 0);
    };

    let maxInt = arr[0] >= arr[1] ? arr[0]: arr[1];

    // let maxes[0] be prevMax and maxes[1] be the current max
    let maxes = [0, arr[0]];

    for (let index = 2; index <= n; index++) {
        const curVal = arr[index - 1];
        const prevMax = maxes[0];
        const currentMax = maxes[1];

        if(curVal > maxInt) maxInt = curVal;

        // make the prevMax the current Max
        maxes[0] = currentMax;
        // compare the last value in memo against the sum of prev max, current max, and the current val in the case of negative numbers
        maxes[1] = Math.max(prevMax + curVal, currentMax, curVal);
    };

    // return the max sum of non-adjacent elements
    return Math.max(0, ...maxes, maxInt);
}

console.log(maxSubsetSum(arr));