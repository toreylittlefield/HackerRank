/**
 * Link: https://www.hackerrank.com/challenges/s10-interquartile-range/problem
 * Type: 10 Days of Statistics: Day 1
 * Difficulty: Easy
 * Name: Interquartile Range
 */

// Returns Int interquartile range round to decimal of 1


// Example 1: Expect 9.0
// const values = [6, 12, 8, 10, 20, 16];
// const freqs = [5, 4, 3, 2, 1, 5];

// Example 2: Expect 1.0
const values = [1, 2, 3]
const freqs = [3, 2, 1];

function interQuartile(values, freqs) {
    // Write your code here

    let arr = [];
    for(let index in values) {
        let idx = freqs[index];
        while(idx > 0) {
            arr.push(values[index]);
            idx--;
        };
    };

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


    // return [left, median, right];

    const interQuartileRangeQ3Q1 = Math.abs(right - left).toFixed(1);
    console.log(interQuartileRangeQ3Q1);
    return interQuartileRangeQ3Q1;

    // generic fn to calc median of an arr if even or odd length
    function getMedian(qArr) {
        let len = qArr.length;
        let medianPos = Math.floor(len / 2);

        return len % 2 === 0 ? ((qArr[medianPos - 1] + qArr[medianPos ]) / 2) : qArr[medianPos];
    };
}

console.log(interQuartile(values, freqs));