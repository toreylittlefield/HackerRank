/**
 * Name: Picking Numbers
 * Link: https://www.hackerrank.com/challenges/picking-numbers/problem
 * Difficulty: Easy
 */

// Example 1: Expected {4, 3, 3} which is length 3
// const a = [4, 6, 5, 3, 3, 1];

// Example 2: Expected {1,2,2,1,2} which is length 5
const a = [1, 2, 2, 3, 1, 2]

//find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a) {
    let maxSub = 0;
    let numMap = {};
    let tempMax = 0;

    for (let i = 0; i < a.length; i++) {
        const curVal = a[i];
        if(!numMap[curVal]) {
            numMap[curVal] = 1;
        } else {
            numMap[curVal] ++;
        }
    };

    Object.keys(numMap).forEach((key) => {
        const count =  numMap[key];
        let countNext = numMap[Number(key) + 1];
        if(!countNext) countNext = 0;

        tempMax += count + countNext;
        maxSub = Math.max(maxSub, tempMax);
        tempMax = 0;
    })

    // return max sub array
    return maxSub;
};

console.log(pickingNumbers(a));