/*
 * Link: https://www.hackerrank.com/challenges/30-2d-arrays/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 11: 2D Arrays
 */


function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    };

    const len = arr.length;
    let max = 0;
    let results = []
    for(let col = 0; col < len/2; col++) {
        const [leftCol, rightCol] = [[col], [col + 1]];
        for(let r = 0; col < len/2; r++) {
            
            const [rowTop, row, rowBottom] = [[r], [r + 1], [r + 2]];
            // [0,0], [1,0], [2,0]
            const top = arr[leftCol][rowTop] + arr[col][rowTop] + arr[rightCol][rowTop];
            // [1,1]
            const middle = arr[col][row];
            // [0,2], [1,2], [2,2]
            const bottom = arr[leftCol][rowBottom] + arr[col][rowBottom] + arr[rightCol][rowBottom];
            const sum = top + middle + bottom;
            results.push(sum)
            max = Math.max(sum, max)
        };
    };
    console.log(max)
    return max;
}
