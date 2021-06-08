/*
 * Link: https://www.hackerrank.com/challenges/s10-binomial-distribution-1/problem
 * Type: 10 Days of Statistics
 * Difficulty: Easy
 * Name: Day 4: Binomial Distribution I
 */

/**
 * See Tutorial for Information: https://www.hackerrank.com/challenges/s10-binomial-distribution-1/tutorial
 * Task:
 * The ratio of boys to girls for babies born in Russia is 1.09:1.
 * If there is 1 child born per birth, what proportion of Russian families with exactly 6
 * children will have at least 3 boys?
 * 
 * Write a program to compute the answer using the above parameters. T
 * hen print your result, rounded to a scale of 3 decimal places (i.e., 1.234 format).
 * 
 * Input Format
 * 
 * A single line containing the following values:
 * 
 * 1.09 1
 * 
 * Output Format
 * Print a single line denoting the answer, rounded to a scale of 3 decimal places (i.e., 1.234 format).
 */

// Binomial Distribution --> bdis(x,n,p) = ((n!)/(x!(n-x)!) * p^x * q^(n-x)

// Example 1: Expect 0.696
const input = `1.09 1`

 function processData(input) {
    //Enter your code here
    const [maleR, femaleR] = input.split(' ').map(Number);
    const probability = maleR / (maleR + femaleR);
    const familySize = 6;
    const numberMales = 3;

    console.log(cumulativeProbability(numberMales, familySize, probability, cumProb = 0).toFixed(3))
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