/*
 * Link: https://www.hackerrank.com/challenges/30-genrics/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 21: Generics
 */

function main() {
    // Enter your code here
    let arr = inputLines.map(readLine);
    const map: {
        [key: string]: boolean;
    } = {};
    arr.forEach((el, idx) => {
        if (el in map) {

        } else if (idx !== 0) {
            map[el] = true;
            console.log(el);
        }
    });
}