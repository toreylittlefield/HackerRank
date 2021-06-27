/*
 * Link: https://www.hackerrank.com/challenges/30-more-exceptions//problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 17: More Exceptions
 */

//Write your code here
class Calculator {
    power(n, p) {

        if (n < 0 || p < 0) {
            throw ('n and p should be non-negative')
        }
        return n ** p

    }
}