/**
 * Link: https://www.hackerrank.com/test/dff5pp65l92/questions/9gijrd71dp3
 * Type: JavScript Basic Certification
 * Name: JavaScript: Strip Property
 */

// input

// Example 1: Expect {bar 3, baz 3}
const obj = { foo: 2, bar: 3, baz: 3 } 
const prop = 'foo';

// passes all tests
function stripProperty(obj, prop) {
   // write your code here
   delete obj[prop]
   return obj;
};

  console.log(stripProperty(obj, prop))