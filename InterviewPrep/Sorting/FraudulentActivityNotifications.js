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
const expenditure = [1, 2, 3, 4, 4]
// const d = 4;

// Example 2: Expect 2
// const expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]
const d = 5


function activityNotifications(expenditure, d) {
    // Write your code here

}

console.log(activityNotifications(expenditure, d))