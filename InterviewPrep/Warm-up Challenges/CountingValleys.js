/*
* Link: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
* Name: Counting Valleys
* ----------------------
* Description Of Problem
* ----------------------
* Example input
* steps = 8
* path = [DDUUUUDD]
* The hiker first enters a valley 2 units deep.
* Then they climb out and up onto a mountain 2 units high.
* Finally, the hiker returns to sea level and ends the hike.
*
* Function Description
*
* Complete the countingValleys function in the editor below.
*
* countingValleys has the following parameter(s):
*
* int steps: the number of steps on the hike
* string path: a string describing the path
* Returns
*
* int: the number of valleys traversed
*/

// Input
const steps = 8;
const path = [DDUUUUDD];

function countingValleys(steps, path) {
    // Write your code here
    // goal is to find the number of "valleys" walked
    // 1 valley is a sequence of steps below "sea-level"
    // returns: int the number of valleys traversed
    
    // important Hikes always start and end at sea level
    
    // the path starts at sea level which is 0
    // the path ends at sea level which is 0
    // if U count +1
    // if D count -1 
    // keep total count of U + D
    // if < 0 then count valley + 1
    
    // path is an string of 'U' & 'D'
    // steps is an int number of steps on hike
    
    // ['U','D',...]
    let arrayPath = Array.from(path);
    // keep track above/below, starts at 0
    let latitude = 0;
    // number of valleys traversed, starts at 0, +1 when latitude below 0
    let valleyCount = 0;
    
    // iterate over path array and track latitude
    arrayPath.forEach((step, index) => {
        if(step === 'U') {
            latitude ++;
            // check if latitude is < 0
            if(latitude === 0 && index !== 0) {
                valleyCount++;
            }
        } else if(step === 'D') {
            latitude --;
        };
    });
    // return valleyCount
    return valleyCount;
};

countingValleys(steps, path)