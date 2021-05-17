/**
* Link: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
* Name: Arrays - Minimum Swaps 2
*
* -----------
* Description
* -----------
* You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
* You are allowed to swap any two elements.
* Find the minimum number of swaps required to sort the array in ascending order.
*
* -------
* Example
* -------
* arr = [7,1,3,2,4,5,6]
* i   arr                     swap (indices)
* 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
* 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
* 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
* 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
* 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
* 5   [1, 2, 3, 4, 5, 6, 7]
* It took 5 swaps to sort the array.
*
* --------------------
* Function Description
* --------------------
* Complete the function minimumSwaps in the editor below.
*
* minimumSwaps has the following parameter(s):
*
* int arr[n]: an unordered array of integers
*
* -------
* Returns
* -------
* int: the minimum number of swaps to sort the array
*
* -----------
* Constraints
* -----------
* 1 <= n <= 10^5
* 1 <= arr[i] <= n
*/

// Input
// const arr = [2, 3, 4, 1, 5];
const arr = [7,1,3,2,4,5,6];
// const arr = [2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19];
// index    [0,1,2,3,4,5,6]
// arrE - 1 [6,0,2,1,3,4,5]

function minimumSwaps(arr) {
    // ------ Key Points -----
    // 1. array is unordered
    // 2. integers are consecutive
    // 3. there are no duplicate integers
    // 4. must sort array in ascending order
    // 5. any two elements can be swapped in the sort
    // 6. return a variable, let's call it minNumSwaps, that returns the min. # of swaps to sort the array in asc order

    /* --- Notes / Thoughts ----
    * 1. init a variable, minNumSwaps
    * 2. iterate over the values in the array checking if they are in the correct postion which is basically the value of the index + 1
    * 3. if the value we are evaluating is not in the correct position we'll want to swap it with the correct value
    * 4. logically it follows that once a value is swapped and placed into the correct position it won't be swapped again
    * 5. if arr is sorting in ascending order, then swapping the current value (if not in the correct position) from left -> right in the array will
    *       ensure that if a larger value is in the front it will be move backwards in the array, thus we don't not have to check if the values
    *       the are now moved to the front are both in order of asc. and also are smaller than the value that was pushed to the back
    * 6. essentially if a swap is needed, swap the current value at index with indexOf the value because it will be larger
    */

    // see points 4 - 6 for explanation
    let minNumSwaps = 0;

    for(let index = 0; index < arr.length; index++) {
        
        // the current value at the index 
        const currentValue = arr[index];

        // the value this element evaulate too
        const correctValue = index + 1;

        // check if currentValue is in the right position
        if(currentValue !== correctValue) {

            // find the value to swap
            const valueToSwap = arr.indexOf(correctValue, index);

            // swap the currentValue
            arr[valueToSwap] = currentValue;

            // swap the value at the current position to be the correct value (this is basically the index + 1 for this position in asc. order)
            arr[index] = correctValue;

            // add a swap to the total
            minNumSwaps++;

            console.log(arr)
        };
    };
    // return minNumSwaps
    return minNumSwaps;
};

console.log(minimumSwaps(arr));