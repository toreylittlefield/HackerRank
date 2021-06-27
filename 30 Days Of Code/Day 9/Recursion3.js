/*
 * Link: https://www.hackerrank.com/challenges/30-recursion/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 9: Recursion 3
 */


/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n) {
    // Write your code here
    let curVal = 1;
    while(n > 1) {
        curVal *= n;
        n--;
    };
    return curVal;
};