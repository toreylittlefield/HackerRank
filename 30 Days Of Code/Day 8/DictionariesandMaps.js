/*
 * Link: https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 8: Dictionaries and Maps
 */


function processData(input) {
    //Enter your code here
    input = input.split('\n');
    const len = input[0];
    const keyValMap = Object.fromEntries(input.splice(1, len).map(el => el.split(' ')));
    input.splice(1).forEach(key => {
        if(key in keyValMap) {
            console.log(key + '=' + keyValMap[key])
        } else {
            console.log('Not found')
        }
    })
}