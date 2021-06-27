/*
 * Link: https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 16: Exceptions - String to Integer
 */

this.insert = function (head, data) {
    //complete this method
    const newNode = new Node(data);
    if (!head) {
        head = newNode;
    } else {
        let curNode = head;
        while (curNode.next) {
            curNode = curNode.next;
        }
        curNode.next = newNode;
    }
    return head;
};