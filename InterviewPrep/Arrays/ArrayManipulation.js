/**
* Link: https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
* Name: Arrays - Array Manipulation
*
* -----------
* Description
* -----------
* Starting with a 1-indexed array of zeros and a list of operations,
* for each operation add a value to each the array element between two given indices, inclusive.
* Once all operations have been performed, return the maximum value in the array.
*
* -------
* Example
* -------
* n = 10
* queries = [[1,5,3], [4,8,7], [6,9,1]];
*
* Queries are interpreted as follows:
*
*    a b k
*    1 5 3
*    4 8 7
*    6 9 1
*
* Add the values of  between the indices  and  inclusive:

* index->	 1 2 3  4  5 6 7 8 9 10
*           ------------------------
*	        [0,0,0, 0, 0,0,0,0,0, 0]
*	        [3,3,3, 3, 3,0,0,0,0, 0]
*	        [3,3,3,10,10,7,7,7,0, 0]
*	        [3,3,3,10,10,8,8,8,1, 0]
The largest value is 10  after all operations are performed.
*
* -------
* Returns
* -------
* int - the maximum value in the resultant array
*/

// Input


function arrayManipulation(n, queries) {

}

console.log(arrayManipulation(n, queries));