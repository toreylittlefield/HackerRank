/*
 * Link: https://www.hackerrank.com/challenges/30-interfaces/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 19:  Interfaces
 */

function main() {
    let a = parseInt(readLine());
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            sum += i;
        };
    };;
    console.log(sum);
}