/*
 * Link: https://www.hackerrank.com/challenges/min-max-riddle/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * Type: Stacks and Queues
 * Difficulty: Medium
 * Name: Min Max Riddle
 */

// Input

// Example 1: Expect 7 6 4 4 3 2
const arr = [3, 5, 4, 7, 6, 2];

// Example 2: Expect 1 2 3 5 1 13 3
// const arr = [1, 2, 3, 5, 1, 13, 3];

// Returns array: Single line containing n space-separated integers denoting the output for each window size from 1 to n.

function riddle(arr) {
    // write code here
    let maxWinsArray = [];

    //first arr find max for window 1
    //second: window 2 pair mins of (n[0], n[1]) , (n[1], n[2])... (n[n-2], n[n-1]) then find max amongst all possibile mins
    // repeat...

    // return an array with maximums
    return maxWinsArray;
}

console.log(solve(arr));