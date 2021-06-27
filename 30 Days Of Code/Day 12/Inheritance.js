/*
 * Link: https://www.hackerrank.com/challenges/30-inheritance/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 12: Inheritance
 */


class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id)
        this._scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        const avg = this._scores.reduce((acc, val) => acc + val)/this._scores.length;
        const letterGrades = ['O','E','A','P','D','T'];
        if(avg >= 90) return letterGrades[0];
        if(avg >= 80) return letterGrades[1];
        if(avg >= 70) return letterGrades[2];
        if(avg >= 55) return letterGrades[3];
        if(avg >= 40) return letterGrades[4];
        return letterGrades[5];
    }
}
