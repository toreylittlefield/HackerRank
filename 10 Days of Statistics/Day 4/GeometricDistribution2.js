/*
 * Link: https://www.hackerrank.com/challenges/s10-geometric-distribution-2/problem
 * Type: 10 Days of Statistics
 * Difficulty: Easy
 * Name: Day 4: Geometric Distribution II
 */

// See Tutorial : https://www.hackerrank.com/challenges/s10-geometric-distribution-1/tutorial

/**
Task:
The probability that a machine produces a defective product is 1/3.
What is the probability that the 1st defect is found during the first 5 inspections?

Input Format:
The first line contains the respective space-separated numerator and denominator for the probability of a defect, 
and the second line contains the inspection we want the probability of being the first defect for:
    1 3
    5

If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of 3 decimal places.
 */

// Binomial Distribution --> bdis(x,n,p) = ((n!)/(x!(n-x)!) * p^x * q^(n-x)
// Negative Binomial Distribution --> negbdis*(x,n,p) = ((n - 1!)/((x - 1)!((n-1)-(x-1))!) * p^x * q^(n-x)

// Expect 0.066
const input = `1 3 
5`

function processData(input) {
    //Enter your code here


}

console.log(processData(input))