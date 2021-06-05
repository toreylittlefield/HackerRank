/*
 * Link: https://www.hackerrank.com/challenges/30-operators/problem
 * Type: 30 Days Of Code
 * Difficulty: Easy
 * Name: Day 2: Operators
 */

/*
 * Task : Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), 
 * and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. 
 * Round the result to the nearest integer.
 */

/**
 * Inputs: 
 * int meal_cost: the cost of food before tip and tax
 * int tip_percent: the tip percentage
 * int tax_percent: the tax percentage
 */

// Returns The function returns nothing. Print the calculated value, rounded to the nearest integer.

// Example 1: Expect 15
const meal_cost = 12.00
const tip_percent = 20
const tax_percent = 8

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    return Math.round(meal_cost + meal_cost * ((tip_percent + tax_percent) / 100))
}

console.log(solve(meal_cost, tip_percent, tax_percent))