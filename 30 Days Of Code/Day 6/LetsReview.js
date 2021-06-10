/*
 * Link: https://www.hackerrank.com/challenges/30-review-loop/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 6: Let's Review
 */


/**
Task:
Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters 
as 2 space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.

Example:
s = adbecf

Print abc def

Input Format

The first line contains an integer, T (the number of test cases).
Each line i of the T subsequent lines contain a string, S.

Sample Input:
2
Hacker
Rank

Sample Output:
Hce akr
Rn ak
 */

const input = `2
Hacker
Rank`

function processData(input) {
    //Enter your code here
    const S = input.split('\n').slice(1);

    let results = [...S].map(evenOddString);

    results.forEach(val => console.log(val))
    return results;

    function evenOddString(S) {
        let evenS = '';
        let oddS = '';
        [...S].map((character, idx) => {
            if(idx % 2 === 0) {
                evenS += character;
            } else {
                oddS += character;
            }
        });
        return `${evenS} ${oddS}`
    };
}

console.log(processData(input))