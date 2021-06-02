/*
 * Link: https://www.hackerrank.com/challenges/flipping-bits/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous
 * Type: Miscellaneous
 * Difficulty: Easy
 * Name: Flipping bits
 */

// input

// Example 1: Expect [2147483648, 4294967294, 4294967295]
const arrN = [2147483647, 1, 0]

function loop(arrN) {
    return arrN.map(flippingBits)
};

function flippingBits(N) {
    // convert N to binary using radix 2
    let radix = N.toString(2);

    // spread binary bits and change the bits that are 1 to 0
    radix = [...radix].map(bit => bit === '1' ? '0' : '1');

    // create a new array of the missing 32 bits
    const bitArray = Array(32 - radix.length).fill(1);
    
    // combine bit arrays with radix array
    radix = [...bitArray, ...radix].join('');

    // convert the string radix to the a number (parseInt parameter of 2 is the option for 32 bit radix)
    return parseInt(radix, 2);
};

console.log(loop(arrN))