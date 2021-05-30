/*
 * Link: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Type: Dictionaries and Hashmaps
 * Difficulty: Easy
 * Name: Two Strings
 */

/***
 * Given two strings, determine if they share a common substring. A substring may be as small as one character.
 */

// Returns string: 'Yes' or 'No' for each pair of strings

// input

// Example 1: Expect Yes
// const s1 = `hello`
// const s2 = `world`

// Example 1: Expect No
const s1 = `hi`
const s2 = `world`

function twoStrings(s1, s2) {
    // Write your code here
    let ans = 'NO'

    // determine larger & smaller string and create map for larger string
    let lgString = '';
    let smString = '';
    s1.length >= s2.length ? (lgString = s1, smString = s2) : (lgString = s2, smString = s1);
    const lgMap = {};

    // map over larger string
    Array.from(lgString).forEach(letter => {
        lgMap[letter] = true;
    });

    // if there is even 1 matching letter then return YES and end
    Array.from(smString).forEach(letter => {
        if(lgMap[letter]) {
            ans = 'YES'
            return;
        };
    })

    // return Yes or No
    return ans;
}

console.log(twoStrings(s1, s2));