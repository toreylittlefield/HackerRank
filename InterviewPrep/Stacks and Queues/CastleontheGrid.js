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
const grid = [ ['.','X','.'], 
               ['.','X','.'],
               ['.','.','.'] ];

const startX = 0;
const startY = 0;
const goalX = 0;
const goalY = 2;

function minimumMoves(grid, startX, startY, goalX, goalY) {
    // Write your code here
    console.log(grid, startX, startY, goalX, goalY)

    // create Queues class object
    class Queues {
        constructor() {
            this.yQueue = [];
            this.xQueue = [];
            this.visited = {};
            this.totalMoves = 0;
        }

        enqueue(yPos, xPos) {
            if(!this.isEmpty) return;
            this.yQueue.push(yPos);
            this.xQueue.push(xPos);
        }

        dequeue() {
            if(!this.isEmpty) return;
            return [this.yQueue.shift(), this.xQueue.shift()];
        }

        peek() {
            if(!this.isEmpty) return;
            return [this.yQueue[0], this.xQueue[0]];
        }

        isEmpty() {
            return this.xQueue.length === 0 ? true : false;
        }

        addVisited(yPos, xPos) {
            this.visited[yPos] = { [xPos || xPos]: true };
        }

        checkVisited(yPos, xPos) {
            if(this.visited[yPos] && this.visited[yPos][xPos].visited) {
                return false;
            };
            return true;
        }

        addMove() {
            this.totalMoves ++;
        }

        checkMoves() {
            return this.totalMoves;
        }

        checkGoal(yPos, xPos) {
            return yPos === goalY && xPos === goalX
        }

    };

    // init queues
    const queues = new Queues();

    // add the starting position to visited
    queues.addVisited(startY, startX);

    // enqueue starting position
    queues.enqueue(startY, startX);

    // loop through queue and check neighbors
    while(!queues.isEmpty()) {
        const [yPos, xPos] = queues.dequeue();

        // check if position is the goal position
        if(queues.checkGoal(yPos, xPos)) break;

        // increment moves
        queues.addMove();

        // loop through other nodes
        exploreNeighborNodes(yPos, xPos, queues);
    }

    return queues.checkMoves();

    // loop through the nodes in the grid
    function exploreNeighborNodes(yPos, xPos, queues) {

        // direction vectors
        const yVector = [-1, 1, 0, 0];
        const xVector = [0, 0, -1, 1];

        // loop through directions in vectors
        for(let i = 0; i < 4; i++) {
            while(true) {
                // check surrounding nodes in grid/graph
                yPos += yVector[i];
                xPos += xVector[i];

                // check out of bounds
                if( yPos < 0 || xPos < 0) break;
                if( yPos > grid[0].length - 1 || xPos > grid.length - 1) break;

                // check if already visited or is an 'X'
                if (grid[yPos][xPos] === 'X') break;
                if (!queues.checkVisited(yPos,xPos)) continue;

                // enqueue & add to visited
                queues.enqueue(yPos, xPos);
                queues.addVisited(yPos, xPos);
            };
        };
    };
}

console.log(minimumMoves(grid, startX, startY, goalX, goalY))
