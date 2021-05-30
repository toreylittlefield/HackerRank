/*
 * Link: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Type: Dictionaries and Hashmaps
 * Difficulty: Easy
 * Name: Hash Tables: Ransom Note
 */

/***
 * note is case-sensitive 
 * must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.
 * print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
 */

// Returns string: 'Yes' or 'No'

// input

// Example 1: Expect No
const magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
const note = ['two', 'times', 'two', 'is', 'four'];

// Example 2: Expect Yes
// const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
// const note = ['give', 'me', 'one', 'grand', 'today',];

// Example 3: Expect No
// const magazine = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts']
// const note = ['ive', 'got', 'some', 'coconuts']


function checkMagazine(magazine, note) {
    // Write your code here
    
}

console.log(checkMagazine(magazine, note));