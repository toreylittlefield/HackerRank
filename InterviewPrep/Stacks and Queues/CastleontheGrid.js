/**
 * Link: https://www.hackerrank.com/challenges/castle-on-the-grid/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * Name: Castle on the Grid
 * Difficulty: Medium
 *
 *
 * Objective: Given a grid, a start and a goal, determine the minmum number of moves to get to the goal.
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
 * int: the minimum moves to reach the goal
*/

// Input:
// const grid = [ ['.','X','.'], 
//                ['.','X','.'],
//                ['.','.','.'] ];

// const startX = 0;
// const startY = 0;
// const goalX = 0;
// const goalY = 2; // expected 3 moves

// const grid = [ ['.','.','.'],
//                ['.','X','.'],
//                ['.','X','.']];

// starting [0,0,2,2] expected 3
// const grid = [ '...', '.X.', '.X.' ] // expected 3

// starting [2,0,0,2] expected 2
const grid = ['...' , '.X.', '.X.'];

const startX = 2;
const startY = 0;
const goalX = 0;
const goalY = 2; // expected 3 moves

function minimumMoves(grid, startRow, startCol, goalRow, goalCol) {
    
    // create the 2D matrix/ grid
    grid = grid.map(col => Array.from(col).map(row => row));

    //helper to visualize start, goal, and barriers
    console.log(grid.map((col, j) => col.map((row,i) => {
        if(j === goalCol && i === goalRow) {
            return 'GOAL'
        } else if(j === startCol && i === startRow) {
            return 'ENTER'
        } else if(row === 'X') {
            return 'X'
        };
        return '.'
    })))

    let numRows = grid[0].length;
    let numCols = grid.length;

    // grid matrix
    let matrixTotal = numCols * numRows;

    // queues for rows and cols to enqueue / dequeue
    let rowQueue = [], colQueue = [];

    // track moves & nodes
    let totalMoves = 0;
    let nodesInLayerCount = 1;
    let nodesInNextLayerCount = 0;

    // the goal variable to end the search
    let goalFound = false;

    // create a visited array & use to track visited nodes: default to false
    let visited = grid.map(col => col.map(row => false));

    // direction vectors for grid / movement
    let rowVector = [-1, +1, 0, 0];
    let colVector = [0, 0, -1, +1];

    // starting
    rowQueue.push(startRow);
    colQueue.push(startCol);

    // make visited
    visited[startRow][startCol] = true ;

    // loop over queue
    while(rowQueue.length !== 0) {

        // base case to prevent infin. loop
        if(totalMoves > matrixTotal) return totalMoves = -1;

        // dequeue
        const row = rowQueue.shift();
        const col = colQueue.shift();

        // compare & goalFound
        if(row === goalRow && col === goalCol) {
            goalFound = true;
            visited[row][col] = true;
            break;
        };

        // search for neighboring nodes
        exploreNeighborNodes(row, col);

        // increment nodes & total moves
        nodesInLayerCount--;
        if(nodesInLayerCount === 0) {
            nodesInLayerCount = nodesInNextLayerCount;
            nodesInNextLayerCount = 0;
            totalMoves++;
        };

    };

    
    console.log(visited)
    // return the totalMoves
    if(goalFound) {
        return totalMoves;
    };
    return totalMoves;

    function exploreNeighborNodes(row, col) {
        // should be modified BFS such that it only only breaks when out of bounds/range or hits an 'X' barrier
        for (let index = 0; index < 4; index++) {
            const currentRow = row + rowVector[index];
            const currentCol = col + colVector[index];
            // skip out of bounds
            if(currentRow < 0 || currentCol < 0) break;
            if(currentRow >= numRows || currentCol >= numCols) break;

            // skip over visited locations && coordinates with an 'X'
            if(visited[currentRow][currentCol]) continue;
            if(grid[currentRow][currentCol] === 'X') break;
            // else enqueue & add to visited for these nodes
            rowQueue.push(currentRow);
            colQueue.push(currentCol);
            visited[currentRow][currentCol] = true;

            // increment layer count to loop over nodes in next layer
            nodesInNextLayerCount++;
        };
    };

};

console.log(minimumMoves(grid, startX, startY, goalX, goalY))
