/*
 * Link: https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * Type: Sorting
 * Difficulty: Easy
 * Name: Mark And Toys
 */

// Returns int: the maximum number of toys *NOTE A toy can't be bought multiple times.;

// Example 1: Expect 4
// const prices = [1, 12, 5, 111, 200, 1000, 10]
// const k = 50;

// Example 2: Expect 3
const prices = [1,2,3,4]
const k = 7


function maximumToys(prices, k) {
    // Write your code here
    let numToysWithinBudget = 0;

    let n = prices.length;

    let sum = 0;

    prices.sort((a, b ) => a - b);

    // find max toys by sorting
    for (let index = 0; index < n; index++) {
        if(sum + prices[index] >= k) break;
        sum += prices[index];
        numToysWithinBudget++;
    };

    // return the num of toys available to purchase within the budget k and price list
    return numToysWithinBudget;
}

console.log(maximumToys(prices, k))