/*
 * Link: https://www.hackerrank.com/challenges/s10-mcq-3/problem
 * Type: 10 Days of Statistics
 * Difficulty: --
 * Name: Day 2: Compound Event Probability
 */

// There are 3 urns labeled X, Y, and Z.


// Urn X contains 4 red balls and 3 black balls.
// Urn Y contains 5 red balls and 4 black balls.
// Urn Z contains 4 red balls and 4 black balls.

// One ball is drawn from each of the 3 urns. What is the probability that, of the 3 balls drawn, 2 are red and 1 is black?

// Example 1: Expect ~33.33
const X = ['red', 'red', 'red', 'red', 'black','black','black']
const Y = ['red', 'red', 'red', 'red', 'red', 'black', 'black','black', 'black']
const Z = ['red', 'red', 'red', 'red', 'black', 'black','black','black']
const draw = ['red', 'red', 'black']

function solveProb(X,Y,Z,draw) {
    // Mutally exclusive events in this example see the link: https://www.hackerrank.com/challenges/s10-mcq-1/tutorial
    
    // calculate the probability for each different draw (SCENARIO) type i.e P of 'Black' in X
    // events are independent and mutually exclusive in this scenario so total P = Px(red)Py(red)Pz(red) + Px(red)Py(red)Pz(red) + Px(black)Py(black)Pz(black)
    const numberEvents = draw.length;

    // pX[0] === Px(red), px[1] === Px(black)
    let pX = [];
    let pY = [];
    let pZ = [];
    let urnPArray = [pX, pY, pZ];
    let urns = [X,Y,Z];

    // calculate probability for each urn, event, target
    draw.forEach( target => {
        urnPArray.forEach((urnP, idx) => {
                urnP.push(calcProbDraw(target, urns[idx]))
        });
    });
    console.log(urnPArray)
    const eventProbSum = calcProbIndieEvent (urnPArray, numberEvents, draw) //.reduce((a, b) => a + b);
    console.log(eventProbSum)
    
    // calculate probability for each event for each urn & ball type
    function calcProbIndieEvent (urnPArray, numberEvents, draw) {
        let eventProbability = [];

        // [red, red, black], [red,black,red], [black,red,red]
        for (let jdx = numberEvents - 1; jdx >= 0; jdx--) {
            eventProbability[jdx] = [];
            urnPArray.forEach((urn, idx) => {
                eventProbability[jdx].push(urn[jdx])
            });
            console.log(eventProbability)
            eventProbability[jdx] = eventProbability[jdx].reduce((a, b) => a *= b);
        };
        return eventProbability;
    }
        
        function calcProbDraw(target, urn) {
        const numberEvents = urn.length;
        let sumTarget = (urn.reduce((acc, val) => {
            if(val === target) {
                acc += 1;
            };
            return acc;
        },0)/numberEvents).toFixed(2);
        return Number(sumTarget);
    };
}

console.log(solveProb(X,Y,Z,draw))