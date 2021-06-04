/*
 * Link: https://www.hackerrank.com/challenges/s10-basic-statistics/problem
 * Type: Statistics
 * Difficulty: --
 * Name: Day 0: Mean, Median, and Mode
 */

// Example 1: Expect mean: 43900.6, median: 44627.5 mode: 4978 (in this case the mode is the lowest value)
const input = `10
64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`

function processData(input) {
    // input is a string with 2 lines so split it
    const arr = input.split("\n");
    // this is the data
    input = arr[1].split(" ").map(d => Number(d));

    let len = input.length;

    // mean & median
    let mean = 0;
    let median = 0;

    // variables for the mode / frequency
    let mode = 0;
    let freqMap = {};
    let maxFreq = 0;
    let minValue = Infinity;
    let maxFreqKey = 0;


    // calculate median by sortings, & we can calculate the mean at the same time
    mean = input
        .sort((a,b) => a - b)
        .reduce((a, b, idx) => {

        // find median & calculate median
        if(Math.floor(len/2) === idx ) {
            median = ((input[idx] + input[idx - 1])/2).toFixed(1)
        };

        // create a frequency table / map for the mode
        freqMap[b] ? freqMap[b]++ : freqMap[b] = 1;

        // return acc & current value for the mean
        return a + b;
        }, 0)

    // calculate the mean
    mean = (mean / len).toFixed(1);

    // find mode with frequency table / map
    Object.keys(freqMap).forEach( key => {
        const freq = freqMap[key];

        if(freq > maxFreq) {
            maxFreq = freq;
            // get the value of the key with the max frequency
            maxFreqKey = key;
        };

        // track the min value in the case the frequency of all values is 1
        minValue = Math.min(key, minValue);
    });

    // check is max frequency is 1 then return the min value of the data set
    if(maxFreq === '1') {
        maxFreqKey = minValue;
    };

    // the mode
    mode = maxFreqKey;

    console.log(mean);
    console.log(median);
    console.log(mode);

    // return the mean, median, mode
    return {mean, median, mode}
}

console.log(processData(input))