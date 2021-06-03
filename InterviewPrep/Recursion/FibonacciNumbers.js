/*
 * Link: https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking
 * Type: Recursion and Backtracking
 * Difficulty: Easy
 * Name: Recursion: Fibonacci Numbers
 */

// Input

// Example 1: Expect 5
// const n = 5

// Example 2: Expect 144
const n = 12

// Returns int the nth element in the Fibonacci sequence

// time complexity with recursion O(2^n)
function fibonacci(n) {
    if(n < 2) return n;

    n = fibonacci(n - 1) + fibonacci(n - 2);
    return n
}

// console.log(fibonacci(n));

// memoized fibonacci version time complexity linear O(n) but crazy slow and space complexity is O(n)
const memo = (cb) => {
    let cache = {}
    return (n) => {
        if (n in cache) {
            return cache[n]
        } else {
            cache[n] = cb(n);
            return cache[n];
        };
    };
};

function fibonacciMemo(num) {
    console.time('startmemo')
    let cache = {}
    function fibo(num , cache) {

        if(cache[num]) {
            return cache[num];
        };

        if(num < 3) {
            cache[num] = num - 1;
            return num - 1;
        };

        num = fibo((num - 1), cache) + fibo((num - 2), cache);
        cache[num] = num;
        return num;
    };
    console.timeEnd('startmemo')
    return fibo(num, cache);
}
const memoizedFibo = memo(fibonacciMemo);
// console.log(memoizedFibo(5))
// console.log(memoizedFibo(4))
console.log(memoizedFibo(40));

// Fibonacci not using recursion just a while loop, which is O(n) time and constant O(1) space complexity
// it is also much faster than recurison for larger inputs because there is no huge number of calls added to the call stack
const loopFibonacci = (num) => {
    console.time('loopfibo')
    let current = 1;
    let prev = 0;
    let sum = 0;

    while(num) {
        sum = current;
        current = current + prev;
        prev = sum;
        num--;
    };
    console.timeEnd('loopfibo')
    return sum;
}

console.log(loopFibonacci(40))