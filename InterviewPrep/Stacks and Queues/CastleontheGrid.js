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
const grid = [['.','X','.'], ['.','X','.'],['.','.','.']];
const startX = 0;
const startY = 0;
const goalX = 0;
const goalY = 2;

function minimumMoves(grid, startX, startY, goalX, goalY) {
    // Write your code here
    console.log(grid, startX, startY, goalX, goalY)

    // Create|Init a queue for each dimension x, y
    class Queues {
        constructor() {
            this.xQueue = [];
            this.yQueue = [];
        }

        enqueue(xPos, yPos) {
            this.xQueue.push(xPos);
            this.yQueue.push(yPos);
        }

        dequeue() {
            this.xQueue.shift();
            this.yQueue.shift();
        }

        peek() {
            if(!this.xQueue.length) return;
            return [this.xQueue[0], this.yQueue[0]];
        }
    };

    const queues = new Queues();


    const exploreNeighborNodes = () => {

    };
}

console.log(minimumMoves(grid, startX, startY, goalX, goalY))
