/**
 * Link: https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
 * Name: Insert a node at a specific position in a linked list
 * Difficulty: Easy
 */

function insertNodeAtPosition(llist, data, position) {
    // create the node
    const node = new SinglyLinkedListNode(data)
    
    // get the head of llist
    let currentNode = llist
    
    // loop over the nodes in linked-list to get the correct position
    while(position > 1) {
        position --;
        if(currentNode.next) {
            currentNode = currentNode.next;
        }
    };
    
    // insert the node in the list
    
    // update next prop for the node to point to currentNode next prop
    node.next = currentNode.next
    // update the next prop. to be the current node of the previous node
    currentNode.next = node
    
    // return the llist head node
    return llist
}

console.log(insertNodeAtPosition(llist, data, position));
