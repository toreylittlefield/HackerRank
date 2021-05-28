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

// Exmaple 3: Expect 1
const expenditure = [10,5,2,4,10,2]
const d = 2


function activityNotifications(expenditure, d) {
    /***
     * Steps:
     * 1. Create a window / span of length d and right
     * 2. sort the window & while sorting find the median value
     * 3. To find the median, the formula is window[d/2] if d is odd or (window[d/2] + window[d/2 + 1])/2 if even if the window contains the ints of spanning d length
     * 4. Check if the next value is 2X the median value if true add 1 to the total of numAlertsSent;
     * 5. Move the window from the left by 1 and right by 1, the new median calculated again after sorting
     * 6. Check if next value is 2X... repeat until right pointer reaches the end of expenditures
     */

    const n = expenditure.length;

    let numAlertsSent = 0;
    let medianValue = 0;
    let window = [];

    for(let right = 0; right < n; right++) {
        const curVal = expenditure[right];
        if(window.length !== d) {
            window.push(curVal);
            continue;
        }
        const copyData = [...window];
        medianValue = calcMedian(copyData);
        
        // check median against current value
        if(curVal >= medianValue * 2) {
            numAlertsSent++;
        };

        window.shift();
        window.push(curVal);
    }

    // [2, 3, 4, 2, 3, 6, 8, 4, 5]

    // return number of alerts sent
    return numAlertsSent;

    function calcMedian (data) {
        const len = data.length;
        data.sort((a, b) => a - b);
        let even = len % 2 === 0;
        if(even) {
            const medianNumPos = Math.floor(data.length / 2);
            return medianValue = (data[medianNumPos - 1] + data[medianNumPos]) / 2
        };
        const medianNumPos = Math.floor(data.length / 2) + 1;
        return medianValue = data[medianNumPos - 1];
    };
}

console.log(activityNotifications(expenditure, d))