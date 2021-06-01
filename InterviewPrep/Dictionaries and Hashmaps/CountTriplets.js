/*
 * Link: https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Type: Dictionaries and Hashmaps
 * Difficulty: Medium
 * Name: Count Triplets
 */

/***
 * You are given an array and you need to find number of tripets of indices (i,j,k)
 * such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.
 */

// Returns int: the number of triplets

// input

// Example 1: Expect 2
// const arr = [1, 4, 16, 64]
// const r = 4

// Example 2: Expect 6
// const arr = [1, 3, 9, 9, 27, 81]
// const r = 3

// Example 3: Expect 4
// const arr = [1, 5, 5, 25, 125]
// const r = 5

// Example 4: Expect 2
// const arr = [1, 2, 2, 4]
// const r = 2;

// Example 5: Expect 161700
// const arr = Array(100).fill(1);
// const r = 1;

// Example 6: Expect 0
const arr = [125, 5, 25, 5, 1]
const r = 5

// Example 7: Expect 4 {[0,1,2],[0,1,3],[0,2,3],[1,2,3]}
// const arr = [1,1,1,1]
// const r = 1;


function countTriplets(arr, r) {

    // count # triplets found
    let countTrip = 0;

    const arrLen = arr.length;

    // edge case: no possible triplets
    if(arrLen < 3) return countTrip;

    // use a map
    const numMap = {}
    const tripletsMap = {};

    for (let idx = 0; idx < arrLen; idx++) {
        const curNum = arr[idx]
        let nextPartnerNum = curNum * r;

        // console.log({curNum, nextPartnerNum})

        // skip numbers not in geometric series as they cannot form triplets
        if(curNum % r <= 1 && curNum > 0) {

            // add to total by number of triplets
            if(tripletsMap[curNum] ) {
                countTrip += tripletsMap[curNum];
            };

            if(numMap[curNum]) {
                if(tripletsMap[nextPartnerNum]) {
                    tripletsMap[nextPartnerNum] += numMap[curNum]
                } else {
                    tripletsMap[nextPartnerNum] = numMap[curNum];
                };
            };

            // add or increment numMap
            if(numMap[nextPartnerNum]) {
                numMap[nextPartnerNum]++;
            } else {
                numMap[nextPartnerNum] = 1;
            };

        };
    };

    // console.log({tripletsMap, numMap})

    // return the number of triplets in arr following the geometric progression and i < j < k
    return countTrip;
}

console.log(countTriplets(arr, r));