/*
 * Link: https://www.hackerrank.com/challenges/s10-binomial-distribution-2/problem
 * Type: 10 Days of Statistics
 * Difficulty: Easy
 * Name: Day 4: Binomial Distribution II
 */

/**
 * See Tutorial for Information: https://www.hackerrank.com/challenges/s10-binomial-distribution-1/tutorial
 *
 * Task
 * A manufacturer of metal pistons finds that, on average, 12% of the pistons they manufacture are rejected 
 * because they are incorrectly sized. What is the probability that a batch of 10 pistons will contain:
 * 
 * 1. No more than 2 rejects?
 * 2. At least 2 rejects? 
*/

// Binomial Distribution --> bdis(x,n,p) = ((n!)/(x!(n-x)!) * p^x * q^(n-x)

// Example 1: Expect 0.891 0.342
const input = `2 2`

 function processData(input) {
    //Enter your code here
    const [xRandomAtMost, xRandomAtLeast] = input.split(' ').map(Number);
    const probability = 0.12;
    const numberTrials = 10;
    let results = [0,0]
    results[0] = cumulativeProbability(numberTrials - xRandomAtMost, numberTrials, 1 - probability, cumProb = 0).toFixed(3);
    results[1] = cumulativeProbability(xRandomAtLeast, numberTrials, probability, cumProb = 0).toFixed(3);
    return results;
}

function cumulativeProbability (x, n, p, cp = 0) {
    for (let index = x; index <= n; index++) {
        cp += binomialDistribution(index, n, p)
    }
    return cp;
}

function binomialDistribution (x, n, p) {
    return combination(n, x) * (p ** x) * ((1 - p) ** (n - x))
}

function combination (n, x) {
    return factorial(n) / (factorial(x) * factorial(n - x))
}

// Fibonacci not using recursion just a while loop, which is O(n) time and constant O(1) space complexity
// it is also much faster than recurison for larger inputs because there is no huge number of calls added to the call stack
const factorial = (n) => {
    if(n < 2) return 1;
    let factorialSum = 1;

    while(n) {
        factorialSum *= n;
        n--;
    };

    return factorialSum;
};

console.log(processData(input))