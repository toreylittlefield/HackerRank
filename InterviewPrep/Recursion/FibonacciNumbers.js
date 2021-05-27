/*
 * Link: https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking
 * Type: Recursion and Backtracking
 * Difficulty: Easy
 * Name: Recursion: Fibonacci Numbers
 */

// Input

// Example 1: Expect 5
// const n = 5

// Example 2: Expect 144
const n = 12

// Returns int the nth element in the Fibonacci sequence

function fibonacci(n) {
    if(n < 2) return n;

    n = fibonacci(n - 1) + fibonacci(n - 2);
    return n
}

console.log(fibonacci(n));