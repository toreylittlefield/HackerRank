/*
 * Link: https://www.hackerrank.com/challenges/30-abstract-classes/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 13: Abstract Classes
 */


class MyBook extends Book {

    // Declare your class here.
    /**   
     *   Class Constructor
     *   
     *   @param title The book's title.
     *   @param author The book's author.
     *   @param price The book's price.
     **/
    // Write your constructor here
    constructor(title, author, price) {
        super()
        this.title = title;
        this.author = author;
        this.price = price;
    }
    /**   
     *   Method Name: display
     *   
     *   Print the title, author, and price in the specified format.
     **/
    // Write your method here
    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`)
        console.log(`Price: ${this.price}`)
    }
    // End class
}