// https://levelup.gitconnected.com/5-ways-to-log-an-object-to-the-console-in-javascript-7b995c56af5a
// Clear the console at the start of the program's execution.
console.clear();

// https://www.w3schools.com/js/js_variables.asp
/*
Operations & Comparisons
Step 1
Create two variables called "num1" and "num2". Assign each variable a different numerical value between 1 and 15.
*/
var num1 = 1;
var num2 = 7;

/*
Step 2
Using the variables above, add these variables together and multiply by 3. 
Assign the expression to a variable called "result" and console.log its value. 
*/
// PEMDAS (Please Excuse My Dear Auth Sally).
// Math order of precendence.
// https://www.cuemath.com/numbers/pemdas/
// Paragraphs, Exponents, Multiplication, Division, Addition, Subtraction

// result = (1 + 7) * 3 --> 8 * 3
// result = 24
var result = (num1 + num2) * 3;
console.log(result);

// https://www.w3schools.com/js/js_if_else.asp
/*
Step 3
Using the result variable, write an if/else statement comparing the result to the number 50.
If the result is larger than 50, console.log "Result is bigger". 
If it is smaller, console.log "Result is smaller"
*/

if(result > 50) {
    console.log('Result is bigger');
} else {
    console.log('Result is smaller');
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/*
Arrays & Loops
Step 1
Create an empty array and assign it to a variable called "numberList".
*/


// https://www.w3schools.com/js/js_loop_for.asp
/*
Step 2
Using a for loop, place the numbers from 0 to 5 into the "numberList" array.
console.log the numberList array.
*/

// i = iteration
// i++ increments whatever the current value of 'i' is.
// i = 0 (0 < 5 is TRUE) --> numberList.push(i) = [0];
// i = 1 (1 < 5 is TRUE) --> numberList.push(i) = [0, 1];
// i = 2 (2 < 5 is TRUE) --> numberList.push(i) = [0, 1, 2];
// i = 3 (3 < 5 is TRUE) --> numberList.push(i) = [0, 1, 2, 3];
// i = 4 (4 < 5 is TRUE) --> numberList.push(i) = [0, 1, 2, 3, 4];
// i = 5 (5 < 5 is FALSE) --> Loop ends.

var numberList = [];

for(i = 0; i < 5; i++) {
    numberList.push(i);
}

console.log('Length of numberList:');
console.log(numberList.length);
console.log(numberList);

// 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
/*
Step 3
Remove the last number in the array and console.log the array.
*/

// function testFunction(name, age) {
//     console.log('This fuction has been called');
//     console.log(name);
//     console.log(age);
// }

// testFunction('Eddie');
// testFunction('Tamara', 27);

// 3
numberList.pop();

console.log('Popped last element of the numberList array.');
console.log(numberList);

numberList.push('Lol');
console.log(numberList);

