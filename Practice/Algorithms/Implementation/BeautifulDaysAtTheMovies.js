/*
 * Link: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 * Type: Algorithms / Implementation
 * Difficulty: Easy
 * Name: Beautiful Days at the Movies
 */

// Input

/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

// Example 1: Expected Output 2
const i = 20;
const j = 23;
const k = 6;

function beautifulDays(i, j, k) {
    // Write your code here
    let days = 0;
    for(i; i <= j; i++) {
        if(evalInts(i,k) > 0 ) {
            days++;
        }
    }
    return days;
    function evalInts(i, k) {
        const revI = reversedNum(i);
        if(Number.isInteger((i - revI)  / k)) {
            return 1;
        }
        return -1;
    }
    function reversedNum(num) {
        const string = num.toString();
        const reverse = [...string].reverse().reduce((cur, val) => cur + val, '');
        return parseFloat(reverse) * Math.sign(num);
    } 
}