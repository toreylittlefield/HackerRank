/*
 * Link: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * Type: Sorting
 * Difficulty: Easy
 * Name: Sorting: Bubble Sort
 */

// Returns & Prints
// Print the three lines required, then return. No return value is expected.

// Example 1:
// const a = [1,2,3]
/**
 * Expected Output:
 * Array is sorted in 0 swaps.
 * First Element: 1
 * Last Element: 3
 */

// Example 2:
const a = [3, 2, 1]
/**
 * Expected Output:
 * Array is sorted in 3 swaps.
 * First Element: 1
 * Last Element: 3
 */


function countSwaps(a) {
    // Write your code here
    let numSwap = 0;
    let firstEl, lastEl;
    
    function swap(curVal, nextVal, j) {
        numSwap++;
        a[j] = nextVal;
        a[j + 1] = curVal;
    }

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1], j);
            }
        }
    };

    firstEl = a[0]; 
    lastEl = a[a.length - 1];


    let printNumSwap = `Array is sorted in ${numSwap} swaps.`;
    let printLastEl = `Last Element: ${lastEl}`;
    let printFirstEl = `First Element: ${firstEl}`;

    // print strings
    console.log(printNumSwap)
    console.log(printFirstEl)
    console.log(printLastEl)
    return a;
}

console.log(countSwaps(a))