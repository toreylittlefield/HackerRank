/*
 * Link: https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * Type: Dictionaries and Hashmaps
 * Difficulty: Medium
 * Name: Frequency Queries
 */

/***
 * - 1 x : Insert x in your data structure.
 * - 2 y : Delete one occurence of y from your data structure, if present.
 * - 3 z : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.
 */

// Returns int []: the results of queries of type 3

// input int [][]: queries

// Example 1: Expect [0, 1] which is NO, YES
const queries = [[1, 6],[3, 2],[1, 10],[1, 10],[1, 6],[2,5],[3, 2]]

function freqQuery(queries) {
    // array to store our answers for type 3 (frequency match)
    let type3Ans = [];

    // create map
    const freqMap = {};

    // first element is operation 1 (insert),2 (delete) or 3 (1 || 0 if matching frequency);
    // naive solution
    queries.forEach(query => {
        console.log(query)
        const [oper, value] = query;
        switch(oper) {
            // insert the value
            case 1: {
                freqMap[value] ? freqMap[value] ++ : freqMap[value] = 1;
                break;
            }
            // delete 1 from the value
            case 2: {
                freqMap[value] ? freqMap[value]-- : null;
                break;
            }
            case 3: {
                // check if matching frequency exists
                Object.values(freqMap).includes(value) ? type3Ans.push(1) : type3Ans.push(0)
            }
        }
    });



    // return the type3Ans which are either 0 or 1 in the int []
    return type3Ans;
}

console.log(freqQuery(queries));
