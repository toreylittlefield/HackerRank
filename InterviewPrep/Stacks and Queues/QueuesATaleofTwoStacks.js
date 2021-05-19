/**
 * Link: https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * Name: Queues: A Tale of Two Stacks
 * Difficulty: Medium
 *
 */

// Input: The first line contains a single integer, q, the number of queries.
const input = `8
1 15
1 17
3
1 25
2
3
2
3`;
// Steps:
// 1. if 1, then enqueue (push)
// 2. if 2, then dequeue (shift)
// 3. if 3, then print from first in queue/stack (FIFO) (peek)

// For each query of type 3, return the value of the element at the front of the fifo queue on a new line.


function processData(input) {
    //Enter your code here
    const inputArray = input.split("\n");

    // first element is n, the length of the input string]
    const length = inputArray.shift();

    class Queue {
        constructor() {
            this.fifoStack = [];
            this.result = '';
        }

        enqueue(data) {
            this.fifoStack.push(data);
        }

        dequeue() {
            return this.fifoStack.shift();
        }

        peek() {
            if(!this.fifoStack.length) return null;
            return this.fifoStack[0];
        }

        addResult(data) {
            this.result += data;
        }

        result() {
            return this.result;
        }

    }

    const queue = new Queue();

    inputArray.forEach(data => {
        let [int, value] = data.split(' ');
        int = Number(int);
         switch(int) {
            case 1:
                queue.enqueue(value);
                break;
            case 2:
                queue.dequeue();
                break;
            case 3:
                const result = queue.peek();
                queue.addResult(`${result} \n` );
                break;
         };
    });
    console.log(queue.result);
};

console.log(processData(input))