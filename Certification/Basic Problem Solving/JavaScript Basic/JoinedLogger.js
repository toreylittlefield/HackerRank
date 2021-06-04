/**
 * Link: https://www.hackerrank.com/test/dff5pp65l92/questions/ms8ge5m9g5
 * Type: JavScript Basic Certification
 * Name: JavaScript: Joined Logger
 */

// input

// Example 1: Expect `foo;bar;bax`
const level = 21
const sep = ';'

'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = `21 ;
4
40 foo
90 bar
20 baz
21 bax`;
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

function logger(msg) {
  ws.write(`${msg.text}\n`);
}

function joinedLogger(level, sep) {
  // write your code here
  return function f(...messages) {
  let string = "";
     messages.forEach(msg => {
         if(msg.level >= level){
          string = string + msg.text + sep   
         }
     })
     let len = sep.length
     let stringArray = string.split("")
     stringArray.splice( stringArray.length - len, len)
     string = stringArray.join("")
     console.log({string, messages, level, sep})
     fs.createWriteStream(process.env.OUTPUT_PATH).write(string);
     return string
  }
}

function main() {
    const firstLine = readLine().trim().split(" ");
    const level = parseInt(firstLine[0]);
    const sep = firstLine[1];
    const myLog = joinedLogger(level, sep);
  
    const n = parseInt(readLine().trim());
    let messages = [];
    for (let i = 0; i < n; ++i) {
      const line = readLine().trim().split(" ");
      const level = parseInt(line[0]);
      const text = line[1];
      messages.push({ level, text });
    }
    myLog(...messages);
    ws.end();
  }

console.log(joinedLogger(level, sep))