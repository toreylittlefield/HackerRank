/*
 * Link: https://www.hackerrank.com/challenges/30-linked-list/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 15: Linked List
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