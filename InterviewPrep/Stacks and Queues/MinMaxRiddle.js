/*
 * Link: https://www.hackerrank.com/challenges/min-max-riddle/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * Type: Stacks and Queues
 * Difficulty: Medium
 * Name: Min Max Riddle
 */

// Input

// Example 1: Expect 7 6 4 4 3 2 , arr length is 6 even
// const arr = [3, 5, 4, 7, 6, 2];
// 3, 4 , 4, 6 ,2 (max is 6) window 2

// Example 2: Expect 13 3 2 1 1 1 1 arr length is 7 odd
// const arr = [1, 2, 3, 5, 1, 13, 3];

// Example 3: Expect 12 2 1 1
// const arr = [2, 6, 1, 12]

// Example 4: 984349810 716998518 716998518 550142629 550142629 448775176 355847868 285650353 285650353 285650353 285650353 144603739 144603739 144603739 144603739 140712186 140712186 140712186 140712186 140712186 140712186 140712186 140712186 50621903 20472621 20472621 20472621 20472621 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 5125280 
const arr = [789168277, 694294362, 532144299, 20472621, 316665904, 59654039, 685958445, 925819184, 371690486, 285650353, 522515445, 624800694, 396417773, 467681822, 964079876, 355847868, 424895284, 50621903, 728094833, 535436067, 221600465, 832169804, 641711594, 518285605, 235027997, 904664230, 223080251, 337085579, 5125280, 448775176, 831453463, 550142629, 822686012, 555190916, 911857735, 144603739, 751265137, 274554418, 450666269, 984349810, 716998518, 949717950, 313190920, 600769443, 140712186, 218387168, 416515873, 194487510, 149671312, 241556542, 575727819, 873823206]

// Returns array: Single line containing n space-separated integers denoting the output for each window size from 1 to n.

function riddle(arr) {
    const n = arr.length
    
    // array for all the possible windows / spans
    const windowSizesMax = Array(n).fill(-Infinity)
    
    // stack for tracking the starting index of each span / window
    const windowSpanStack = [];

    for( let i = 0; i <= n; i++) {

        // the start of the current window / span by index position in the array "arr"
        let startOfSpanPos = windowSpanStack[windowSpanStack.length - 1];

        // the value at the beginning of the span
        const startOfSpanValue = arr[startOfSpanPos];

        const curValue = arr[i];

        // add the current index to the to the stack until a lower integer is found 
        if (!windowSpanStack.length || curValue > startOfSpanValue) {
            windowSpanStack.push(i)

            // logic for the window Maximums
        } else {

            // compare last max to current max in the window / span for the respective size
            const startPos = windowSpanStack.pop();

            // get the starting postion / index of the span
            startOfSpanPos = windowSpanStack[windowSpanStack.length - 1];

            // calculate the length of current span / window
            let lenOfWindow = (i - startOfSpanPos - 1);

            if(!windowSpanStack.length) {
                lenOfWindow = i;
                windowSizesMax[lenOfWindow - 1] = arr[startPos];
            } else {
                windowSizesMax[lenOfWindow - 1] = Math.max(windowSizesMax[lenOfWindow-1], arr[startPos]);
            };

            // start with the curValue again as the new value to compare in next iteration
            i--;
        };
    };

    // fill in missing maximums for windows
    for (let i = n - 1; i > 0; i--) {
        windowSizesMax[i - 1] = Math.max(windowSizesMax[i], windowSizesMax[i - 1]);
    };

    // return the maximums of each window / span by size
    return windowSizesMax;
}

console.log(riddle(arr));