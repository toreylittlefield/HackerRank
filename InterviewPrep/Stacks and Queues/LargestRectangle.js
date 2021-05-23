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

// Example 4: expect 18
const height = [1, 2, 3, 5, 6, 2, 4, 5, 5, 5, 1, 15, 8, 1, 2];

// Example 5: expected 26152
// const height = [8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116]

// Example 5: expect 18
// const height = [1, 3, 5, 9, 11]


// Some thoughts on the problem...
// potential largest areas = [1 * length of array, (minHeight > 1 * anotherArray(minHeight > 1 start, minHeight > 1 end)
// ]
// lengthArea = 12 * 1 = 12 --> height.length * 1
// largestAreaByInt = 30 * 1 = 30 --> Math.max(...height)
// areaWithMin = (starts at 0 ends at index 11 minHeight(2) * 12 = 24 --> minHeight > 1; startIndex
// areaWithOtherMin = starts at index 5 ends at index 12 this minHeight is 4, so 4 * 7 = 28
// return largest Area which is the 30 in this case (largestAreaByInt)


function largestRectangle(heightsArray) {
    // two stacks track heights and index along the array
    let posIndexStack = [];
    let heightStack = [];

    // area to compare & return
    let maxArea = 1;

    // track the starting index position in the posIndexStack for the current rectangle
    let startingIndex = 0;
    
    let heightArrayLength = heightsArray.length;



    findAreas(heightsArray)

    // loop over areas & push to stacks
    function findAreas(heightsArray) {
        for (let index = 0; index < heightArrayLength; index++) {
            const currentHeight = heightsArray[index];
            // push height & index onto stacks if current height is greater than last height in stack
            if(currentHeight > peekStack(heightStack)) {
                posIndexStack.push(index);
                heightStack.push(currentHeight);
            }
            // if currentHeight is less than last height pop & calc area then add back index from top of stack & currentHeight
            else if(currentHeight < peekStack(heightStack)) {
                while(heightStack.length > 0 && currentHeight < peekStack(heightStack)){
                    compareMaxArea(index);
                };
                posIndexStack.push(startingIndex);
                heightStack.push(currentHeight);
            }
            // if last element loop over the stacks and compare areas until stacks are empty
            if (index === heightArrayLength - 1) {
                // loop over stack until empty
                while(heightStack.length > 0) {
                    compareMaxArea(index + 1);
                }
            };
        };
    };

    // peek a stack
    function peekStack(array) {
        if(array.length === 0) return 0;
        return array[array.length - 1];
    };

    // compare currentArea To Largest Area Found
    function compareMaxArea(currentIndex) {
        let tempHeight = heightStack.pop();
        let tempIndex = posIndexStack.pop();
        let tempWidth = currentIndex - tempIndex;
        let tempArea = tempHeight * tempWidth;
        maxArea = Math.max(tempArea, maxArea);

        // return the last tempIndex back to the posIndexStack stack
        startingIndex >= 0 ? startingIndex = tempIndex : null;
    }

    // return the maxArea largest rectangle
    return maxArea;
};

console.log(largestRectangle(height));