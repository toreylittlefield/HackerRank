/**
 * Link: https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
 * Name: Balanced Brackets
 * Difficulty: Medium
 *
 */

// Input: string s: a string of brackets

//STDIN Function ----- -------- 3 n = 3 {[()]} first s = '{[()]}' {[(])} second s = '{[(])}' {{[[(())]]}} third s ='{{[[(())]]}}'
// const s = `{[()]}`; // Expect YES
// const s = '{[(])}'; // Expect No
// const  s ='{{[[(())]]}}'; // expect YES
// const s = `{(([])[])[]}` // expect YES
// const s = `{{)[](}}` // expect NO
const s = `}][}}(}][))]` // expect NO

function isBalanced(s) {
    // Write your code here
    let isBalanced;

    // logic
    // 1. Edge case checks: s.length even || s[0] is reversed / negative if so return 'NO
    // 2. take left from array and peek stack if match remove & pop else push to stack
    // 3. repeat until array is empty
    // 4. when array is empty check if stack is empty if true then return 'YES' else 'NO'

    // if s is odd not balanced
    if(s.length % 2 === 1) {
        return isBalanced = 'NO';
    };

    // instead of brackets lets use ints
    let sMapToInt = {
        '(': 1,
        ')': -1,
        '[': 2,
        ']': -2,
        '{': 3,
        '}': -3
    };

    const arrayS = Array.from(s);
    let stack = [];
    
    // check if first elemeent is backwards
    if(sMapToInt[arrayS[0]] < 0) return isBalanced = 'NO'; 

    // loop over arrayS until empty
    while(arrayS.length !== 0) {
        const current = arrayS.shift()

        // convert to map int
        const currentNum = sMapToInt[current]

        // peek the stack
        const peek = stack[stack.length - 1];

        // if current is -, should close with + from peek / match
        if(peek > 0 && currentNum < 0 && peek + currentNum === 0) {
            stack.pop()
        } else {
            stack.push(currentNum);
        }

    };

    // return 'YES' or 'NO' for isBalanced Bool
    return stack.length ? isBalanced = 'NO' : isBalanced = 'YES';
};

console.log(isBalanced(s))