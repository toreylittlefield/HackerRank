/**
* Link: https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
* Name: Arrays: New Year Chaos
*
* -----------
* Description
* -----------
* It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
* Each person wears a sticker indicating their initial position in the queue from 1 to n.
* Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker.
* One person can bribe at most two others.
*
* Determine the minimum number of bribes that took place to get to a given queue order.
* Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
*
* -------
* Example
* -------
* q = [1,2,3,5,4,6,7,8]
* If person 5 bribes person 4, the queue will look like this: [1,2,3,5,4,6,7,8]. Only 1 bribe is required. Print 1.
* q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. Print 'Too chaotic'.
*
* --------------------
* Function Description
* --------------------
* Complete the function minimumBribes in the editor below.
*
* minimumBribes has the following parameter(s):
*
* int q[n]: the positions of the people after all bribes
*
* -------
* Returns
* -------
* No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.
*
* -----------
* Constraints
* -----------
* 1 <= t <= 10
* 1 <= n <= 10^5
*/

// Input
const q = [1, 2, 5, 3, 7, 8, 6, 4];
// order  [1, 2, 3, 4, 5, 6, 7, 8]
// tBribes 0| 0| 2| 0| 2| 2| 1| 0|

function minimumBribes(q) {
    // Write your code here

    // 1. create a function that checks each element of the array
    // 3. use a variable bribeTotal to count the number of bribes
    // 4. to count number of bribes take the current element and count how many larger numbers are ahead of it in the array, 
    // 5. if found increment totalBribes for each larger number found
    // 6. if the value at the index is > n + 2 print 'too chaotic'
    // 7. Remember! No value is returned, just print 'too chaotic' or variable bribeTotal

    let bribeTotal = 0;

    for(let currentPosition in q) {
        const currentValue = q[currentPosition];

        // if the current value is greater then currentPosition + 3 positions (because we start at 1 not 0)
        if(currentValue > Number(currentPosition) + 3) {
            bribeTotal = 'Too chaotic';
            break;
        } else {
            // loop from the currentValue - 2 to the index of the currentPosition
            for(let j = Math.max(0, currentValue - 2); j < currentPosition; j++ ) {
                // compare and if the value of q[j] is larger than the current value add to bribeTotal
                if(q[j] > currentValue) {
                    bribeTotal++;
                };
            };
        };
    };

    // return / print
    console.log(bribeTotal)
}

minimumBribes(q);