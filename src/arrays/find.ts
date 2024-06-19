import Person from "../data/people/types";

// Function to demonstrate the find() method
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function findFirstAbove30(peopleArray: Person[]): Person | undefined {
    // e.g. const person = peopleArray.find(callback);
    // Goal: return the first Person object whose age is greater than 30 and city is 'Kuala Lumpur'
    // return type: Person
    // Example: { name: 'Bob', age: 40, city: 'Kuala Lumpur' }
    //const found = array1.find((element) => element > 10);
    const person = peopleArray.find((thisPerson : Person) => (thisPerson['age']>30 && thisPerson['city'] === 'Kuala Lumpur'))
    return person;
  }

export {findFirstAbove30}