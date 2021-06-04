/**
 * Link: https://www.hackerrank.com/challenges/s10-standard-deviation/problem?h_r=next-challenge&h_v=zen
 * Type: 10 Days of Statistics: Day 1
 * Difficulty: Easy
 * Name: Standard Deviation
 */

//  Prints - float: the standard deviation to 1 place after the decimal

// stdDev has the following parameters: - int arr[n]: an array of integers

// Example 1: Expect 1.9
// const arr = [2, 5, 2, 7, 4]

// Example 2: Expect 14.1
const arr = [10, 40, 30, 50, 20]

function stdDev(arr) {
    // Print your answers to 1 decimal place within this function
    let size = arr.length;
    let mean = arr.reduce((a, b) => a + b)/size;

    let sqDistance = arr.reduce((a , b) => {
        return a + ((b - mean)**2);
    }, 0);

    
    let stDev = Math.sqrt((sqDistance/size)).toFixed(1);
    console.log(stDev);
    return stDev;
}

console.log(stdDev(arr))