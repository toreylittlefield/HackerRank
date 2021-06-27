/*
 * Link: https://www.hackerrank.com/challenges/30-arrays/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 7: Arrays
 */


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const revArr = arr.reverse().toString().replace(/\,/g,' ')
    console.log(revArr)
}