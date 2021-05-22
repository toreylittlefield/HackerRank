/**
 * Link: https://www.hackerrank.com/challenges/largest-rectangle/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * Name: Largest Rectangle
 * Difficulty: Medium
 *
 *
 * Objective: Find the largest solid area which is a rectangle.
 * -------
 * Returns
 * -------
 * int: largestArea
 */

// Input:

// Example 1 : Expected Output 6
// const height = [3,2,3];

//Example 2 : Expect Output 9
// const height = [1,2,3,4,5];

// Example 3: Expected 50
// const height = [11,11,10,10,10];

// Example 4: expect 20
// const height = [1, 4, 3, 5, 6, 2, 4, 5, 5, 5, 5, 30, 2, 1, 2];

// Example 5: expect 18
const height = [1, 3, 5, 9, 11]

// potential largest areas = [1 * length of array, (minHeight > 1 * anotherArray(minHeight > 1 start, minHeight > 1 end)
// ]
// lengthArea = 12 * 1 = 12 --> height.length * 1
// largestAreaByInt = 30 * 1 = 30 --> Math.max(...height)
// areaWithMin = (starts at 0 ends at index 11 minHeight(2) * 12 = 24 --> minHeight > 1; startIndex
// areaWithOtherMin = starts at index 5 ends at index 12 this minHeight is 4, so 4 * 7 = 28
// return largest Area which is the 30 in this case (largestAreaByInt)
console.log(height.length)
// areas to compare


function largestRectangle(height) {
    // Write your code here
    let lengthArea = height.length;
    let largestIntArea = Math.max(...height);
    let firstMin = height[0];
    let firstMinArray = [];

    let maxArea = 1;
    // console.log(lengthArea, largestIntArea)

    let areasStartToEnd = [lengthArea, largestIntArea]

    function findAreas (height) {
        for (let index = 0; index < height.length; index++) {
            const curValue = height[index];
    
            // firstMin must be greater than 1
            if (firstMin === 1) {
                firstMin = curValue;
            };
    
            // swap firstMin with lowest currentValue
            if (curValue < firstMin && curValue > 1) {
                firstMin = curValue;
            };
    
            // keep adding to length of array
            if (curValue >= firstMin && curValue > 1) {
                firstMinArray.push(curValue);
            };

            // if 1 && 2nd item or at the end of the array or current value > first
            if (curValue === 1 && index > 0 || index === height.length - 1 || curValue > firstMin) {
                areasStartToEnd.push(firstMinArray.length * firstMin);
            };
            // console.log(firstMinArray)
            // console.log(firstMin)
        };
        // findAreas(firstMinArray);
    };
    findAreas(height);

    function findRemainingArea () {
        if(firstMinArray.length === 0) return;
        let secondMin = firstMinArray[1];
        let secondMinArray = [];
        for (let j = 1; j < firstMinArray.length; j++) {
            const curV = firstMinArray[j];
            // swap firstMin with lowest currentValue
            if (curV < secondMin && curV > 1) {
                secondMin = curV;
            };
            // keep adding to length of array
            if (curV >= secondMin && curV > 1) {
                secondMinArray.push(curV);
            };
    
            if(j === firstMinArray.length - 2|| curV > secondMin) {
                // console.log(secondMinArray, secondMin)
                areasStartToEnd.push(secondMinArray.length * secondMin);
            }
        };
        firstMinArray.shift();
        findRemainingArea()
    }
    findRemainingArea()


    // console.log(areasStartToEnd)
    // console.log(maxArea)
    if(areasStartToEnd.length > 1) {
        maxArea = Math.max(...areasStartToEnd)
    };
    return maxArea;
};

console.log(largestRectangle(height));