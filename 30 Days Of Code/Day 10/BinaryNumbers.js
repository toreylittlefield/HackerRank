/*
 * Link: https://www.hackerrank.com/challenges/30-binary-numbers/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 10: Binary Numbers
 */


function main() {
    const n = parseInt(readLine().trim(), 10);
    let binary = n.toString(2);
    binary = [...binary.toString()]
    let max = 0;
    let curTotal = 0;
    binary.forEach((num, idx) => {
        if(num === '1' ) {
            curTotal++;
        } else {
            max = Math.max(max, curTotal);
            curTotal = 0;
        }
    })
    max = Math.max(max, curTotal);
    console.log(max)
    return max;
}