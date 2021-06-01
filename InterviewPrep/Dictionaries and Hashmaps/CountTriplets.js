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
// const arr = [125, 5, 25, 5, 1]
// const r = 5

// Example 7: Expect 4 {[0,1,2],[0,1,3],[0,2,3],[1,2,3]}
// const arr = [1,1,1,1]
// const r = 1;

// Example 8: Expect 2325652489
// const json = require('./CountTriplesTest.json');
// const arr = json.data;
// const r = 3

// Example 10: Expect 1
const arr = [3,9,27,3]
const r = 3


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

        // current value && the next value in the triplet
        const curNum = arr[idx]
        let nextPartnerNum = curNum * r;

        /**
         * The main logic here is 3 if statements:
         * note: we cannot find a triplet until the index >= 2 (the third pass and the 3 ifs logic in proper order ensures that)
         * Starting at index 0, the current value for example is 3 and r is 3 in a triplet {3,9,27,3}
         * at index 0 (the first pass), 3 is not in any map, so we 3 * r = 9 add it to the numMap with value 1
         * at index 1 (the second pass), 9 does exist in the numMap but not in the triplets map so we add the triplet map as 9 * r = 27 with a value of 1
         * 9 * r = 27, 27 does not exist in the numMap so we add it with a value of 1
         * at index 2 (the third pass), 27 exists in the triplets map from our last pass at index 2; it has a value of 1 and so we increment the total count of triplets by this amount 1
         * we also have seen 27 in the numMap from the last pass at index 2, so we add to tripletsMap[27 * 3] = 1 (or said differently the previous value of numMap[27] which is 1) since 81 does not exist in the triplets map
         * we also add 27 * r = 81 to the numMap and increment by 1;
         * at index 4 we have again 3, 3 is not in any map but 3 * r = 9 is in the numMap already, so we update the numMap map at 9 which is now 2 as we have seen 3 twice now
         * the total we return is 1 # of triplets
         */

        // add to total triplet count by value in the tripletsMap
        if(tripletsMap[curNum] ) {
            (countTrip += tripletsMap[curNum]);
        };
        
        /** if current matching pair already exists in our numMap
        * increment by the total number of existing value in numMap
        * or add to the map of our triplets
        */
        if(numMap[curNum]) {
            if(tripletsMap[nextPartnerNum]) {
                tripletsMap[nextPartnerNum] += numMap[curNum];
            } else {
                tripletsMap[nextPartnerNum] = numMap[curNum];
            };
        };

        // add the current number * r to the map if not exist or increment numMap count
        if(numMap[nextPartnerNum]) {
            numMap[nextPartnerNum]++;
        } else {
            numMap[nextPartnerNum] = 1;
        };

    };

    // return the number of triplets in arr following the geometric progression and i < j < k
    return countTrip;
}

console.log(countTriplets(arr, r));