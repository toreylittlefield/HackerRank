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
    // 1. take left from array and peek stack if match remove & pop
    // 1. take left from array and check right-end from array if match remove
    // 2. else check left from array against next from array if match remove
    // 3. else if no match push left from array then next from array to stack
    // 4. repeat until array is empty
    // 5. when array is empty check if stack is empty if true then return 'YES' else 'NO'

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

        // if current is -, should close with + from peek / match if not rejct with NO
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