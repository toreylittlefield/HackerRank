/*
* Link: https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
* Name: Repeated String
*
* -----------
* Description
* -----------
* There is a string, s, of lowercase English letters that is repeated infinitely many times. 
* Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.
* Example:
* s = 'abcac'
* n = 10
* The substring we consider is 'abcacabcac', the first 10 characters of the infinite string. 
* There are 4 occurrences of 'a' in the substring.
*
*/

// Input
const s = 'abcac';
const n = 10;

function repeatedString(s, n) {
    // Write your code here
    // 1. string is repeated, name this variable repeatString
    // 2. n is the number of characters in the variable repeatString for which we are concern about
    // 3. we want to iterate over repeatString "n" times, therefore, repeatedString will be an array
    let repeatedString = Array.from(s);

    // the frequency that the letter 'a' occurs in the variable repeatedString
    let freqOfA = 0;

    // edge case
    if(repeatedString.length === 1) {
        if(repeatedString[0] === 'a') {
            return freqOfA = n;
        };
        // does not contain the letter a
        return freqOfA = 0;
    };
    
    // count the frequency of 'a' in the string
    let letterCountOfA = 0;
    
    // loop over the repeatedString array once counting the number of times 'a' appears
    for(let i = 0; i < repeatedString.length; i++) {
        const currentLetter = repeatedString[i];
        // lowercase a
        if(currentLetter === 'a') {
            letterCountOfA ++;
        };
    };
    
    // after the loop it is known the frequency of 'a' that occurs in the string
    // find the number of times the string is repeated
    const numberOfTimesStringRepeat = Math.floor( n / repeatedString.length);

    // find the total number of 'a's in the repeat
    freqOfA = numberOfTimesStringRepeat * letterCountOfA;

    //find the remaining num of 'a' in the remainder string
    const remainderString = repeatedString.slice(0 , n % repeatedString.length);
        // loop over the remainderString array 
    for(let i = 0; i < remainderString.length; i++) {
        const currentLetter = repeatedString[i];
        // lowercase a
        if(currentLetter === 'a') {
            freqOfA ++;
        };
    };

    // int: the frequency of a in the substring
    return freqOfA;
};

repeatedString(s, n);