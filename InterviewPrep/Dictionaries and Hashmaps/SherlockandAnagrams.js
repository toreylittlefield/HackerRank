/*
 * Link: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Type: Dictionaries and Hashmaps
 * Difficulty: Medium
 * Name: Sherlock and Anagrams
 */

/***
 * Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
 * Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
 */

// Returns int: the number of unordered anagrammatic pairs of substrings in s

// input

// Example 1: Expect 4
const s = `abba`

// Example 2: Expect 0
// const s = `abcd`

// Example 3: Expect 3
// const s = `ifailuhkqq`

// Example 4: Expect 10
// const s = `kkkk`

// Example 5: Expect 5
// const s = `cdcd`

function sherlockAndAnagrams(s) {

    /***
     * Note that s has the constraint 1>= s <=100
     * Gaussian Trick For Summing: Applied in this situation of pairs/sequences use numberPairs * (numberPairs - 1) / 2
     */

    // variable to count all anagrams found
    let countAnagrams = 0;
    
    // create a map / hash table for all possible permutations we'll encounter from s 
    let strMap = {}
    
    // loop with in loop: first loop for each letter, inner loop the letter to create a substring for each possible substring of S
    Array.from(s).forEach((letter, idx) => {

        // here's the inner loop that starts at the current index + 1 and creates all possible substrings
        for (let j = idx + 1; j <= s.length; j++) {

            // sort the substrings to account for all possible permutations of the string
            let subStr =  Array.from(s.substring(idx, j)).sort();

            // if already in the map add to the counts
            if(strMap[subStr]) {
                // substract what we previously added to current the total accurate
                const prevVal = strMap[subStr]
                countAnagrams -= prevVal * (prevVal - 1) / 2;

                // use the guassian trick to add to the totals
                strMap[subStr] += 1;
                const val = strMap[subStr]
                countAnagrams += val * ( val - 1) / 2;


            } else {
                // add to the map if it doesn't exist
                strMap[subStr] = 1;
            }
        };
    });

    // return the total count of anagrams found
    return countAnagrams;
}

console.log(sherlockAndAnagrams(s));