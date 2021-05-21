/**
 * Link: https://www.hackerrank.com/challenges/castle-on-the-grid/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * Name: Castle on the Grid
 * Difficulty: Medium
 *
 *
 * Objective: Given a grid, a start and a goal, determine the minmum number oftotalMoves to get to the goal.
 * --------------------
 * Function Description
 * --------------------
 * Complete the minimumMoves function in the editor.
 *
 * minimumMoves has the following parameter(s):
 *
 * string grid[n]: an array of strings that represent the rows of the grid
 * int startX: starting X coordinate
 * int startY: starting Y coordinate
 * int goalX: ending X coordinate
 * int goalY: ending Y coordinate
 * -------
 * Returns
 * -------
 * int: the minimumtotalMoves to reach the goal
*/

// Input:
// const grid = [ ['.','X','.'], 
//                ['.','X','.'],
//                ['.','.','.'] ];

// const startX = 0;
// const startY = 0;
// const goalX = 0;
// const goalY = 2; // expected 3totalMoves

// const grid = [ ['.','.','.'],
//                ['.','X','.'],
//                ['.','X','.']];

// starting [2,0,2,2] expected 2
// const grid = [ 
//     '...', 
//     '.X.', 
//     '.X.' ] // expected 3

// starting [2,0,0,2] expected 2
// const grid = ['...' , '.X.', '.X.'];
// starting 9 1 9 6 expected 3
const grid = [
'.X..XX...X',
'X.........',
'.X.......X',
'..........',
'........X.',
'.X...XXX..',
'.....X..XX',
'.....X.X..',
'..........'
,'.....X..XX']

const startX = 9;
const startY = 1;
const goalX = 9;
const goalY = 6; // expected 3totalMoves

function minimumMoves(grid, startX, startY, goalX, goalY) {

    // for the first node and queue
    const startNode = {
        position: { xPos: startX, yPos: startY },
        totalMoves: 0,
        parentNode: null
    };

    // start enqueue
    const queue = [];
    queue.push(startNode);

    // MAP FOR VISITED NODES
    const visited = {};
    visited[`${startX}${startY}`] = true;

    // check if node has been visited or is blocked else create a new node
    const visitedNodes = (xPos, yPos, totalMoves, parentNode) => {

        // create by position
        const key = `${xPos}${yPos}`;

        // return if blocked or visited
        if (grid[xPos][yPos] === 'X' || visited[key] ) return null;

        // update node to visited
        visited[key] = true;

        // create a new node for this position
        const newNode = {
            position: { xPos, yPos },
            totalMoves,
            parentNode
        };

        // enqueue new node
        queue.push(newNode);
        return newNode;
    };

    // loop through queue
    while (queue.length > 0) {

        // dequeue
        const currentNode = queue.shift();

        // end the loop if goal found
        if (currentNode.position.xPos === goalX && currentNode.position.yPos === goalY) {
            return currentNode.totalMoves;
        };

        // get the currentNode and move count
        const { position, totalMoves: currentTotal } = currentNode;
        const totalMoves = currentTotal + 1;

        // LEFT OF NODE
        for (let y = position.yPos- 1; y >= 0; y--) {
            if (!visitedNodes(position.xPos, y, totalMoves, currentNode)) break
        };
        // NORTH OF NODE
        for (let x = position.xPos - 1; x >= 0; x--) {
            if (!visitedNodes(x, position.yPos, totalMoves, currentNode)) break
        };
        // RIGHT OF NODE
        for (let y = position.yPos + 1; y < grid.length; y++) {
            if (!visitedNodes(position.xPos, y, totalMoves, currentNode)) break
        };
        // BOTTOM OF NODE
        for (let x = position.xPos + 1; x < grid.length; x++) {
            if (!visitedNodes(x, position.yPos, totalMoves, currentNode)) break
        };
    };

    // return 0 for no possible path
    return 0;
};

console.log(minimumMoves(grid, startX, startY, goalX, goalY))
