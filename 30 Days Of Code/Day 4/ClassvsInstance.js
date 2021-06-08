/*
 * Link: https://www.hackerrank.com/challenges/30-class-vs-instance/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 4: Class vs. Instance
 */

/**
 * Objective:
 * In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the Tutorial tab for learning materials and an instructional video!
 *
 * Task:
 * Write a Person class with an instance variable,age , and a constructor that takes an integer, initialAge , as a parameter. 
 * The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; 
 * if a negative argument is passed as initialAge, the constructor should set age to 0 and print Age is not valid, setting age to 0.. 
 * In addition, you must write the following instance methods:
 *
 * 1. yearPasses() should increase the age instance variable by 1.
 * 2. amIOld() should perform the following conditional actions:
 * If age < 13, print You are young..
 * If  age >= 13 and age < 18, print You are a teenager..
 * Otherwise, print You are old..
 * To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. 
 * The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!
 */

/**
 * Example 1: 
 * input -> initialAge = -1
 * output -> "Age is not valid, setting age to 0."
 * output -> "You are young."
 * otput -> "You are young."
 *
 * input -> initialAge = 10
 * output -> "You are young."
 * output -> "You are a teenager."
 *
 * input -> initialAge = 16
 * output -> "You are a teenager."
 * output -> "You are old."
 *
 * input -> initialAge = 18
 * output -> "You are old."
 * output -> "You are old."
 */

const initialAge = -1;


 function Person(initialAge){
    // Add some more code to run some checks on initialAge
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
   };
}

console.log(Person(initialAge));