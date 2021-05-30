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

function maxSubsetSum(arr) {
    let maxSumNonAdj = 0;

    /**
     * start at arr[0] example
     * arr[0] + a[0 + 2] + a[2 + 2]... a[n] total = sum(a[0] + ... + a[n])
     * subsets: {a[0] + a[2]}, {a[0] + a[4]}... {a[0] + a[n]}
     * */


    // return the max sum of non-adjacent elements
    return maxSumNonAdj;
}

console.log(maxSubsetSum(arr));