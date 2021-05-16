/**
* Link: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
* Name: Arrays: Left Rotation
*
* -----------
* Description
* -----------
* A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
* For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].
* Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
*
* Given an array a of n integers and a number, d, perform d left rotations on the array.
* Return the updated array to be printed as a single line of space-separated integers.
*
* --------------------
* Function Description
* --------------------
* Complete the function rotLeft in the editor below.
* 
* rotLeft has the following parameter(s):
* 
* int a[n]: the array to rotate
* int d: the number of rotations
*/

// Input
const a = [1,2,3,4,5];
const d = 4;

function rotLeft(a, d) {
    // Write your code here

    /* 
    * 1. In constraints, note 1 <= d <= n, meaning the number of rotations is less than or equal to the # elements in array a
    * 2. array a will be at least left rotated by 1 element since d is greater than or equal to 1
    * 3. following the logic of point 1. above, the array a cannot be left rotated more than n so we can use splice(0, d)
    * 4. add the elements of the splice array to the tail of the array a using push / spread operator
    */ 
//    let splicedArrayToRotate = a.splice(0,d);
//    a.push(...splicedArrayToRotate);
//    // return the rotated array a
//    return a;
    const splicedArray = a.splice(0, d);
    a.push(...splicedArray);
    return a;
};

console.log(rotLeft(a,d))