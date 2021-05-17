/**
* Link: https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
* Name: Arrays - Array Manipulation
*
* -----------
* Description
* -----------
* Starting with a 1-indexed array of zeros and a list of operations,
* for each operation add a value to each the array element between two given indices, inclusive.
* Once all operations have been performed, return the maximum value in the array.
*
* -------
* Example
* -------
* n = 10
* queries = [[1,5,3], [4,8,7], [6,9,1]];
*
* Queries are interpreted as follows:
*
*    a b k
*    1 5 3
*    4 8 7
*    6 9 1
*
* Add the values of  between the indices  and  inclusive:

* index->	 1 2 3  4  5 6 7 8 9 10
*           ------------------------
*	        [0,0,0, 0, 0,0,0,0,0, 0]
*	        [3,3,3, 3, 3,0,0,0,0, 0]
*	        [3,3,3,10,10,7,7,7,0, 0]
*	        [3,3,3,10,10,8,8,8,1, 0]
The largest value is 10  after all operations are performed.
*
* -------
* Returns
* -------
* int - the maximum value in the resultant array
*/

// Input
// const n = 10;
// const queries = [[1,5,3], [4,8,7], [6,9,1]];

// Test 2
const n = 5;
const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

// -------------- O(n^2) Solution ---------------
// function arrayManipulation(n, queries) {
//     // 1. n is not less than 3
//     // 2. k is not less than 0 (non-negative)
//     // 3. return a maxValue variable init a 0

//     let maxValue = 0;
//     let previousMax = 0;

//     // create 0 array & fill
//     let array = new Array(n).fill(0);

//     // map over queries & update array
//     queries.map( el => {
//         const [a, b, c] = el;

//         // loop over array starting at a - 1 and ending at b - 1 & add c at current index
//         const upperBound = b - 1;
//         for (let index = a - 1; index <= upperBound; index++) {
//             array[index] += c;
//             // compare previousMax value
//             if(array[index] > previousMax) {
//                 previousMax = array[index];
//             };
//         };

//         // for each iter check / compare max values
//         if(previousMax > maxValue) {
//             maxValue = previousMax;
//         };

//     });

//     // return
//     return maxValue
// };

function arrayManipulation(n, queries) {
    // 1. n is not less than 3
    // 2. k is not less than 0 (non-negative)
    // 3. return a maxValue variable init a 0

    let maxValue = 0;
    let runningSum = 0;

    // create 0 array & fill
    let array = new Array(n).fill(0);

    // iterate over queries & create a "range" that represents the values for that range
    queries.forEach((operation) => {
        let [lowerBound, upperBound, valToAdd] = operation;
        // the trick is to NOT iterate over each element in operation adding valToAdd (or c)
        // instead represent each element between the bounds with the valToAdd
        // this basically represents a "sum" for the range
        // in order to find the max value we will iterate over the array and add the values from the sums for each element(this comes later)
            if(upperBound < array.length) {
                array[upperBound] -= valToAdd;
            };
            array[lowerBound - 1] += valToAdd;
    });

    // loop over array adding the sum as we go for each element and track maxValue
    array.forEach(value => {
        runningSum += value;
        maxValue = Math.max(runningSum, maxValue)
    })
    // return
    return maxValue
};

console.log(arrayManipulation(n, queries));

// expected Output
// 10