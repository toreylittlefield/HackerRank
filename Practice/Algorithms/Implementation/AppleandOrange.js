/*
 * Link: https://www.hackerrank.com/challenges/apple-and-orange/problem
 * Type: Algorithms / Implementation
 * Difficulty: Easy
 * Name: Apple and Orange
 */

/***
 * Sample Input
 * 7 11
 * 5 15
 * 3 2
 * -2 2 1
 * 5 -6
 */

// Input
const s = 7 // s: integer, starting point of Sam's house location.
const t = 11 // t: integer, ending location of Sam's house location.
const a = 5 // a: integer, location of the Apple tree.
const b = 15 // b: integer, location of the Orange tree.
const apples = [ -2, 2, 1 ]; // apples: integer array, distances at which each apple falls from the tree.
const oranges = [ 5, -6 ]; // oranges: integer array, distances at which each orange falls from the tree.


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Sam's house is between [s,t] inclusive
    console.log(apples.filter((curVal) => {
        if(a + curVal >= s && a + curVal <= t) {
            return curVal
        }
    }).length)
    console.log(oranges.filter((curVal) => {
        if(b + curVal >= s && b + curVal <= t) {
            return curVal
        }
    }).length)
}

console.log(countApplesAndOranges(s, t, a, b, apples, oranges));

/**
 * Output Format
*
* Print two integers on two different lines:
*
* The first integer: the number of apples that fall on Sam's house.
* The second integer: the number of oranges that fall on Sam's house.
 */
