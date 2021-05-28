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
const expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]
const d = 5

// const expenditure = [200, 199, 100, 150, 80, 60, 200, 5, 150, 10]
// const d = 5

// Exmaple 3: Expect 1
// const expenditure = [10,5,2,4,10,2]
// const d = 2

// Example 4: Expect 633
// const json = require('../Sorting/testData.json');
// const expenditure = json.data;
// const d = 10000


function activityNotifications(expenditure, d) {
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
    return numAlertsSent;

    /**
     * @description takes an array of Ints between 0 & 200 and returns the median value
     * @param {array} data
     * @returns the median number
     */
    function calcMedian (data) {
        const len = d - 1;
        // if d is even
        let i = 0;
        let j = 0;
        if(d % 2 == 0) {
            let medianEvenPos = Math.floor(len / 2);
            let medianOddPos = Math.ceil(len / 2);
            let medianNumEven = 0;
            let medianNumOdd = 0;
            while(i <= medianEvenPos) {
                medianNumEven = j;
                i += data[j];
                j++;
            }
            i = 0;
            j = 0;
            // the odd pos
            while(i <= medianOddPos) {
                medianNumOdd = j;
                i += data[j];
                j++;
            };

            // return the median number
            return (medianNumEven + medianNumOdd) / 2;
        };

        let medianPos = len / 2;
        let medianValue = 0;
        // if d is odd o
        while(i <= medianPos) {
            medianValue = j;
            i += data[j];
            j++;
        };
        return medianValue;
    };
};

console.log(activityNotifications(expenditure, d))