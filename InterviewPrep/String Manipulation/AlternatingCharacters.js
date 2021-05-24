/*
 * Link: https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * Type: String Manipulation
 * Difficulty: Easy
 * Name: Alternating Characters
 */

// Input

// Example 1: Expect 3 4 0 0 4
3
// const s = ['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB']

// Example 2: Expect 6 4 1
const s = 'AAABBBAABB' //, 'AABBAABB', 'ABABABAA'];

// Constraints: Each string s will consist only of characters A and B.

//Returns int: the minimum number of deletions required

function alternatingCharacters(s) {

    // count deletions
    let numDeletions = 0

    // a stack for storing the letters in rotating order and starts with the first letter in the stack
    let letterStack = [s[0]];

    // peak top of stack function
    const peakStack = () => letterStack[letterStack.length - 1];

    // iterate over each letter in each string
    Array.from(s).forEach((letter, j) => {
        if (j !== 0) {

            // compare the top of the stack letter with the current letter
            const topLetter = peakStack();

            // if different letter add to top of stack else add to numDeletions count for this index in the array
            if (topLetter !== letter) {
                letterStack.push(letter)
            } else {
                numDeletions += 1;
            };
        };
    });

    // return numDeletions array
    return numDeletions;
};

console.log(alternatingCharacters(s))