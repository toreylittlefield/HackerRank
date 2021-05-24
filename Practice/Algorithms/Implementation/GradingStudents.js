/*
 * Link: https://www.hackerrank.com/challenges/grading/problem
 * Type: Algorithms / Implementation
 * Difficulty: Easy
 * Name: Grading Students
 */

// Input
const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
    // Write your code here
    return grades.map((grade) => {
        const nextMultOfFive = grade % 5;
        if(nextMultOfFive > 2 && grade >= 38) {
            return grade + 5 - nextMultOfFive;
        }
        return grade;
    })
}

console.log(gradingStudents(grades));
