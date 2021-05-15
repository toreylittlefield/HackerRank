/**
* Link To Problem: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
* Name: Sales by Match aka Socks Merchant
*
* There is a large pile of socks that must be paired by color.
* Given an array of integers representing the color of each sock,
* determine how many pairs of socks with matching colors there are.
*
* Example
* ------------------------
* n = 7
* ar = [1,2,1,2,1,3,2]
* There is one pair of color 1 and one of color 2.
* There are three odd socks left, one of each color. The number of pairs is 2.
* ------------------------
*
* Function Description
*
* Complete the sockMerchant function in the editor below.
*
* sockMerchant has the following parameter(s):
*
* int n: the number of socks in the pile
* int ar[n]: the colors of each sock
* Returns
*
* int: the number of pairs
*
*/

let = n = 7
let = ar = [1,2,1,2,1,3,2];

function sockMerchant(n, ar) {
    // Write your code here
    // n number of socks in the pile with n number of colors
    // 1. find the number of colors, use a set to create a hash
    // 2. with unique set of sock colors match pairs then count


    const socksPile = ar;
    let pairCount = 0;
    let sockColorObject = {};
    
    // Add the unique color/type to an object and count the frequency of the colors
    socksPile.forEach((color) => {
        if(!sockColorObject[color]) {
            sockColorObject[color] = 1;
        } else {
            sockColorObject[color] ++;
        };
    });

    // iterate over the sock colors and if there's at least a pair add to the total pair count
    Object.keys(sockColorObject).forEach((key) => {
        const sock = sockColorObject[key];
        if(sock > 1) {
            pairCount += Math.floor(sock / 2);
        };
    });

    // return the pair count
    return pairCount;
};

sockMerchant(n, ar)