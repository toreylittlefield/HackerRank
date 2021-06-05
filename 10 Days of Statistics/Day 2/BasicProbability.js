/*
 * Link: https://www.hackerrank.com/challenges/s10-mcq-1/problem
 * Type: 10 Days of Statistics
 * Difficulty: --
 * Name: Day 2: Basic Probability
 */

// In a single toss of 2 fair (evenly-weighted) six-sided dice, find the probability that their sum will be at most 9.

// Example 1: Expect 83.34
const dice = [6,6];
const k = 9;

function calcProb(dice, k) {
    const numDie = dice.length;
    let sumToK = 0;
    let comboMap = {}
    const diceFaces =  Array.from(dice.map( el => Array.apply(null, {length: el}).map((_, idx) => idx + 1)));

    const combinations = dice.reduce((acc, num) => acc *= num);

    for (let index = numDie; index <= k; index++) {
        diceFaces.forEach((dice, idx) => {
            dice.forEach((dc1, jdx) => {
                const nextDie = diceFaces[idx + 1];
                console.log({nextDie})
                if(!nextDie) return;
                let nextDieLength = nextDie.length;
                while(nextDieLength) {
                    nextDieLength--
                    if(dc1 + nextDie[nextDieLength] === index) {
                        if(comboMap[index]) {
                            comboMap[index].combos += 1;
                            comboMap[index].pairs.push([dc1, nextDie[nextDieLength]])
                            comboMap[index].p = (comboMap[index].combos/combinations * 100).toFixed(2)
                        } else {
                            comboMap[index] = {combos: 1, pairs: [], p: 0};
                            comboMap[index].pairs.push([dc1, nextDie[nextDieLength]])
                            comboMap[index].p = (comboMap[index].combos/combinations * 100).toFixed(2)
                        }
                    }
                }
          })
        })
    };
    
    const totalP = Object.keys(comboMap).reduce((acc, key, idx) => {
        const val = comboMap[key];
        if(key <= k) {
            acc += Number(val.p)
        };
        return acc;
    }, 0);

    console.log(totalP)

    return totalP;
}

console.log(calcProb(dice, k))