/*
* Link: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
* Name: Jumping On The Clouds
*
* -----------
* Description
* -----------
* For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
* Example:
* c = [0,1,0,0,0,1,0]
* Index the array from 0 ... 6.
* The number on each cloud is its index in the list so the player must avoid the clouds at indices 1 and 5.
* They could follow these two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6.
* The first path takes 3 jumps while the second takes 4. Return 3.
*
* Function Description
* Complete the jumpingOnClouds function in the editor below.
*
* jumpingOnClouds has the following parameter(s):
*
* int c[n]: an array of binary integers
* Returns
*
* int: the minimum number of jumps required
*/

// input
const c = [0,1,0,0,0,1,0];

function jumpingOnClouds(c) {
    // Write your code here
    // return the min amount of "jumps" to win the game
    let minJumps = 0;
    
    // always possible to win
    // "1's" or thunderclouds cannot be one after another
    for(let i = 0; i < c.length - 1; i++) {
        const checkThunderCloud = c[i + 2];
        if(checkThunderCloud === 1) {
            // skip next element in array by jumping 2 clouds
            i++;
        }
        // else just proceed with next element and jump 1 cloud
        minJumps ++
        // if i is greater than the length of the game then break
        if(i > c.length) {
            break;
        }
    }
    
    // return minJumps : int
    return minJumps;
};

jumpingOnClouds(c);