/**
 * Link: https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
 * Name: Inserting a Node Into a Sorted Doubly Linked List
 * Difficulty: Easy
 */


 function sortedInsert(head, data) {
    // create the node
    const nodeToInsert = new DoublyLinkedListNode(data);
    
    // edge case no head - empty list
    if(!head) {
        head = nodeToInsert;
        nodeToInsert.next = null;
        return head;
    };
    
    // check if data is less than head's data to insert node before the head
    if(data < head.data) {
        head.prev = nodeToInsert;
        nodeToInsert.prev = null;
        nodeToInsert.next = head;
        head = nodeToInsert;
        return head;
    };
    
    // get the head of llist
    let currentNode = head;
    
    // loop over nodes where data > head.data to find position to insert
    while(data > currentNode.data) {
        let prevNode = currentNode;
        currentNode = currentNode.next;
        
        // check if next node is tail & insert
        if(prevNode.next === null) {
            prevNode.next = nodeToInsert;
            nodeToInsert.prev = nodeToInsert;
            nodeToInsert.next = null;
            return head;
        };
    };
    
    // once node is found:
    // get prev node call it prevNode
    // prevNode --> currentNode.prev
    // prevNode.next --> nodeToInsert
    // currentNode.prev --> nodeToInsert
    // update nodeToInsert prev & next
    
    let prevNode = currentNode.prev;
    prevNode.next = nodeToInsert;
    nodeToInsert.next = currentNode;
    currentNode.prev = nodeToInsert;
    nodeToInsert.prev = prevNode;

    // return the llist head node
    return head; 

};