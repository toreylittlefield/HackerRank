/*
 * Link: https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * Type: String Manipulation
 * Difficulty: Medium
 * Name: Sherlock and the Valid String
 */

/**
 * Sherlock considers a string to be valid if all characters of the string appear the same number of times.
 * It is also valid if he can remove just 1 character at 1 index in the string,
 * and the remaining characters will occur the same number of times.
 * Given a string , determine if it is valid. If so, return YES, otherwise return NO.
 */

// Input string s: a string

// Outputstring: either YES or NO

// Example 1: Expect 'YES'
const s = `abcdefghhgfedecba`

// Example 2: Expect 'NO'
const s = `aabbccddeefghi`

function isValid(s) {
    /****
     * The key to solving this problem is the logic that for all characters that occur in the string 
     * they need to occur in the same # of frequency with the exception of only 1 character, lets call it z, 
     * this character z can only occur + 1 amount greater than the rest of the characters in the string in order to be "valid"
     * if this character z has a frequency + 2, or there are more than 1 occurences of a character like "z" where the frequency
     * is greater than + 1 then it is impossible for the string to be able to delete only 1 character and still remain unique
     */

    // the default answer to return
     let answer = 'YES';

     // map to count frequency of characters in s
     let charMap = {};

     // the variables to compare the "baseline" val against the number of occurences above this baseline value
     let valToCompare = 0;
     let rejects = 0;
     
     // create frequency count / map
     Array.from(s).forEach( letter => {
         if(charMap[letter]) {
             charMap[letter] ++;
         } else {
             charMap[letter] = 1;
         }
     });
     
     // count the number of occurences above baseline "valToCompare" & if more than 2 than s is no valid
     Object.keys(charMap).forEach((key,index) => {
         const letterVal = charMap[key];
         if(index === 0) valToCompare = letterVal;
         if(Math.abs(letterVal - valToCompare) >= 1) rejects++;
         if(rejects >= 2) {
             return answer = 'NO';
         };
     });
     
     // return the answer 'YES' or 'NO'
     return answer;
}

console.log(isValid(s))

