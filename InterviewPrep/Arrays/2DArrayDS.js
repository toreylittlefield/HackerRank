/*
* 2D Array - DS
* Link: https://www.hackerrank.com/challenges/2d-array/problem?filter=javascript&filter_on=language&h_l=interview&page=1&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
*
* EXAMPLE "arr"
* Row: 0 |1 |2 |3 |4 |5    |Col
* -------------------------|---
*    [[1, 1, 1, 0, 0, 0],  |0
*     [0, 1, 0, 0, 0, 0],  |1
*     [1, 1, 1, 0, 0, 0],  |2
*     [0, 0, 2, 4, 4, 0],  |3
*     [0, 0, 0, 2, 0, 0],  |4
*     [0, 0, 1, 2, 4, 0]]  |5
*
*
*   Sample Hour Glass
* Row:  0|1|2|Col
* -----------|---
*       1 1 1| 0
*         0  | 1
*       1 1 1| 2
*
* First Glass Hour Sum Example:
* arr[0][0] - coordinates: col: 0, row: 0
* arr[0][1] - coordinates: col: 0, row: 1
* arr[0][2] - coordinates: col: 0, row: 2
* arr[1][1] - coordinates: col: 1, row: 1
* arr[2][0] - coordinates: col: 2, row: 0
* arr[2][1] - coordinates: col: 2, row: 1
* arr[2][2] - coordinates: col: 2, row: 2
* hourGlassSum = arr[0][0] + arr[0][1] + ... + arr[2][2]
* hourGlassSum = 6;
*/



const arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

function hourglassSum(arr) {
    // Print the largest (maximum) hourglass sum found in arr a (6 x 6) array.

    let maximumHourglassSum = Int = -Infinity; // the result can be less than 0;

    // 1. arr is a 2D arr, so has properties arr[col] & arr[col][row]
    // 2. each hourglass is made up of 3 rows
    // 3. each hourglass is made of 3 cols with outside cols have 2 values, middle col 3 values
    // 4. Will need to loop over the cols & rows

    let colBound = 3; // bound of hourglass in columns
    let rowBound = 3; // bound of hourglass in rows

    for (let col = 0; col <= colBound; col ++) {
        for (let row = 0; row <= rowBound; row ++) {

            let currentSum = Int = 0;
            // top side of hourglass shape
            currentSum += arr[col][row] + arr[col][row + 1] + arr[col][row + 2];

            // bottom side of hourglass shape
            currentSum += arr[col + 2][row] + arr[col + 2][row + 1] + arr[col + 2][row + 2];

            // middle of hourglass
            currentSum += arr[col + 1][row + 1];

            // check & compare for max sum
            if(currentSum > maximumHourglassSum) {
                maximumHourglassSum = currentSum;
            };
        };
    };

    // int: the maximum hourglass sum
    return maximumHourglassSum;
};

// Run the arr sample
console.log(hourglassSum(arr));