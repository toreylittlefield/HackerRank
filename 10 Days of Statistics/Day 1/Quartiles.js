/**
 * Link: https://www.hackerrank.com/challenges/s10-quartiles/problem
 * Type: 10 Days of Statistics: Day 1
 * Difficulty: Easy
 * Name: Quartiles
 */

// Returns int[3]: the medians of the left half of arr, arr in total, and the right half of arr.

/**
 * Input: The first line contains an integer, n, the number of elements in arr.
 * The second line contains n space-separated integers, each an arr[i].
 */


// Example 1: Expect [6, 12, 16] which is in order of medians: left-half, median total, right-half
// const arr = [3, 7, 8, 5, 12, 14, 21, 13,18]

// Example 2: Expect [2, 4, 6]
const arr = [1,3,5,7];

function quartiles(arr) {
    // Write your code here
    const len = arr.length;

    // our left & right & median values to return
    let left = 0;
    let right = 0;
    let median = 0;

    // median index position
    let medianPos = Math.floor(len / 2);


    // sort the arr
    arr.sort((a,b) => a - b);

    // calculate left median
    left = Math.floor(getMedian(arr.slice(0, medianPos)));

    // calc right median if even or odd
    right = len % 2 === 0 ? getMedian(arr.slice(medianPos)) : getMedian(arr.slice(medianPos + 1));

    // calc the median of arr
    median = getMedian(arr)


    return [left, median, right];

    // generic fn to calc median of an arr if even or odd length
    function getMedian(qArr) {
        let len = qArr.length;
        let medianPos = Math.floor(len / 2);

        return len % 2 === 0 ? ((qArr[medianPos - 1] + qArr[medianPos ]) / 2) : qArr[medianPos];
    };
}

console.log(quartiles(arr));