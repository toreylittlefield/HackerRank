/*
 * Link: https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * Type: Sorting
 * Difficulty: Medium
 * Name: Fraudulent Activity Notifications
 */

/***
 *  Problem Statement:
 *  If the amount spent by a client on a particular day
 *  is greater than or equal to 2X the client's median spending for a trailing number of days,
 *  they send the client a notification about potential fraud.
 */

/***
 * Variable Inputs:
 * int expenditure[n]: daily expenditures
 * int d: the lookback days for median spending
 */

// Returns int: the number of notices sent

// Example 1: Expect 0
// const expenditure = [1, 2, 3, 4, 4]
// const d = 4;

// Example 2: Expect 2
// sorted 2 2 3 3 4 4 5 6 8
// const expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]
// const d = 5

// const expenditure = [200, 199, 100, 150, 80, 60, 200, 5, 150, 10]
// const d = 5

// Exmaple 3: Expect 1
// const expenditure = [10,5,2,4,10,2]
// const d = 2

// Example 4: Expect 633
const json = require('../Sorting/testData.json');
const expenditure = json.data;
const d = 10000


function activityNotifications(expenditure, d) {
    console.time('start')
    /***
     * Steps:
     * 1. Use Sort Count Method
     * 2. Use the constraint that the expenditure values are between 0 & 200 inclusive
     * 3. To optimize the calcMedian function runtime break the loop when the (d-1)/2 is reached in the sorted count array
     * 4. For each iteration in the sorted count array add 1 to the median variable since the index is equivalent to the Ints traversed to calculate the median
     */

    const n = expenditure.length;

    let numAlertsSent = 0;
    let medianValue = 0;

    // use a count sorted array
    let countArr = Array(201).fill(0);

    // init array to the length of the window d
    for(let i = d - 1; i >= 0; i--) {
        countArr[expenditure[i]] += 1;
    };

    // loop over array starting at d ending n - 1 values
    for(let index = d; index < n - 1; index++) {
        const curVal = expenditure[index];

        // calculate the median value
        medianValue = calcMedian(countArr);

        // check median against current value
        if(curVal >= medianValue * 2) {
            numAlertsSent++;
        };

        // decrement the previous item
        countArr[expenditure[index - d]] --;

        // add the current value
        countArr[curVal]++;
    }

    // return number of alerts sent
    console.timeEnd('start')
    return numAlertsSent;

    /**
     * @description takes an array of Ints between 0 & 200 and returns the median value
     * @param {array} data
     * @returns the median number
     */
    function calcMedian (data) {
        const len = d - 1;
        let medianEvenPos = Math.floor(len / 2);
        let medianOddPos = Math.ceil(len / 2);
        let medianNumEven = 0;
        let medianNumOdd = 0;
        // if d is even
        if(d % 2 === 0) {
            let i = 0;
            let j = 0;
            while(i <= medianEvenPos) {
                medianNumEven = j;
                i += data[j];
                j++;
            }
        };
        let i = 0;
        let j = 0;
        // if d is odd or even
        while(i <= medianOddPos) {
            medianNumOdd = j;
            i += data[j];
            j++;
        };

        // return the median number
        return (medianNumEven + medianNumOdd) / 2;
    };
}

// function activityNotifications (expenditure, d) {
//     console.time('TotalTime')
//     // Number of notifications
//     let n = 0

//     // Set midpoints for median calculation
//     let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ]
//     let m1, m2, m

//     // Initialize count sorted subarray
//     let cs = new Array(201).fill(0)
//     for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++

//     // Iterate through expenditures
//     for (let i = d, l = expenditure.length; i < l; i++) {
        
//         // Find median
//         for (let j = 0, k = 0; k <= i1; k += cs[j], j++) {
//             console.log({cs})
//             console.log({k, val: cs[j], j, i1})
//             m1 = j
//         }
//         for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
//         let m = (m1 + m2) / 2

//         // Check if notification is given
//         if (expenditure[i] >= m * 2) n++

//         console.log({curVal: expenditure[i], m, m1 , m2})

//         // Replace subarray elements
//         cs[expenditure[i-d]]--
//         cs[expenditure[i]]++
//     }
//     console.timeEnd('TotalTime')
//     return n
// }

console.log(activityNotifications(expenditure, d))