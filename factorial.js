// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

// Example:
// factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

// Assume only positive numbers will be given as an argument for the factorial() function.

const factorial = integer => {
    let arr = [];
    for (let i = 1; i <= integer; i++) {
       arr.push(i);
    }
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}