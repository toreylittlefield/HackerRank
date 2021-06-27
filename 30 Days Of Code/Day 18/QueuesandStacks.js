/*
 * Link: https://www.hackerrank.com/challenges/30-queues-stacks/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 18:  Queues and Stacks
 */

function Solution() {
    //Write your code here
    const stack = [];
    const queue = [];

    this.pushCharacter = (char) => stack.push(char);
    this.enqueueCharacter = (char) => queue.push(char);
    this.popCharacter = () => stack.pop();
    this.dequeueCharacter = () => queue.shift();

}