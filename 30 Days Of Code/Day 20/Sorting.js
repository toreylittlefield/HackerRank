/*
 * Link: https://www.hackerrank.com/challenges/30-sorting/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 20: Sorting
 */

function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let numSwap = 0;

    // an alternative way to sort using bubble sort and using a naive solution
    for (let i = 0; i < n - 1; i++) {
        let curVal = a[i];
        let nextVal = a[i + 1];
        while (curVal > nextVal) {
            a[i] = nextVal;
            a[i + 1] = curVal;
            numSwap++;
            i--;
            curVal = a[i];
            nextVal = a[i + 1];
        };
    };
    console.log(`Array is sorted in ${numSwap} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}