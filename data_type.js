// array 

selectedFruit = ['banana', 'apple', 'pineapple']
console.log(selectedFruit[1]); // array access

selectedFruit[1] = 'passionfruit'; // change 'apple' to 'passionfruit'
console.log(selectedFruit[1]);
console.log(selectedFruit);

selectedFruit.push('passionfruit') // add 'passionfruit' to the last index
console.log(selectedFruit[1]);
console.log(selectedFruit);

selectedFruit.splice(2, 0, 'passionfruit'); // insert an item in an array at a specific index
console.log(selectedFruit);

// object
user = {
    firstName: 'Pum',
    lastName: 'Chanpom',
    favoriteSingers: ['imase', 'watanabe']
}

console.log(user.firstName); // object access
console.log(user.favoriteSingers[0]); // access array in an object 

// change data type
let myName = 'Alex';
console.log(typeof(myName));
myName = 39;
console.log(typeof(myName));