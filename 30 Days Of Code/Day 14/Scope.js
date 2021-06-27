/*
 * Link: https://www.hackerrank.com/challenges/30-scope/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 14: Scope
 */

function main() {
    // Enter your code here
    const inputs = inputLines.map(readLine)[1].split(' ');
    let max = -Infinity;
    let min = Infinity;
    inputs.forEach(str => {
        max = Math.max(Number(str), max);
        min = Math.min(Number(str), min);
    });

    console.log(Math.abs(max - min));
};