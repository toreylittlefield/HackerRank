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

    return fibo(num, cache);
}
const memoizedFibo = memo(fibonacciMemo);
// console.log(memoizedFibo(5))
// console.log(memoizedFibo(4))
console.log(memoizedFibo(50));