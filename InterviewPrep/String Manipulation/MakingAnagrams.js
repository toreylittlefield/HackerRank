/*
 * Link: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * Type: String Manipulation
 * Difficulty: Easy
 * Name: Strings: Making Anagrams
 */

// Input

// Example 1: Expect 4
// const a = 'cde';
// const b = 'abc';

// Example 2: Expect 30
const a = 'fcrxzwscanmligyxyvym';
const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

// Contraints: The strings  and  consist of lowercase English alphabetic letters, ascii[a-z].

//Returns int: the minimum total characters that must be deleted

function makeAnagram(a, b) {
    // the variable minTotalCharsDel is the min # of characters to delete string to make a & b anagrams
    let minTotalCharsDel = 0;
    const arrayA = Array.from(a);
    const arrayB = Array.from(b);

    // find shortest & longest array to optimize runtime
    const arrayALength = arrayA.length;
    const arrayBLength = arrayB.length;
    let longerArray = arrayALength > arrayBLength ? arrayA : arrayB;
    let shorterArray = arrayALength <= arrayBLength ? arrayA : arrayB;

    // this can be solve by finding the intersections of a & b w/ frequency of chars in a hash/frequency table
    let interSectionOfAB = 0;
    let frequency = {
        longer: {},
        shorter: {}
    };
    for (let index = 0; index < longerArray.length; index++) {
        const key = longerArray[index];
        let anotherKey = undefined;
        if(index < shorterArray.length) {
            anotherKey = shorterArray[index];
            if(!frequency.longer[anotherKey]) {
                frequency.longer[anotherKey] = 1;
            } else {
                frequency.longer[anotherKey] += 1;
            };
        };
        if(frequency.shorter[key]) {
            frequency.shorter[key] += 1;
        } else {
            frequency.shorter[key] = 1;
        };
    };

    // count the intersection / frequency and add the smallest frequency
    Object.keys(frequency.shorter).forEach(key => {
        if(frequency.longer[key]) {
            const smallest = Math.min(frequency.longer[key],frequency.shorter[key]);
            interSectionOfAB += smallest;
        };
    });

    // diff & substract
    let diffA = (interSectionOfAB - arrayALength) * -1;
    let diffB = (interSectionOfAB - arrayBLength) * -1;
    minTotalCharsDel = diffA + diffB;

    // return min total chars deleted
    return minTotalCharsDel;
}

console.log(makeAnagram(a, b))