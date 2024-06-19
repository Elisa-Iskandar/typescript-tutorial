import Person from "../data/people/types";

// Function to demonstrate the every() method
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
function getIsAllAdults(peopleArray: Person[]): boolean {
    // e.g. const allAdults = peopleArray.every(callback);
    // Goal: return a boolean value indicating whether all Person objects have an age greater than 30
    // return type: boolean
    // const isBelowThreshold = (currentValue) => currentValue < 40;
    // const array1 = [1, 30, 39, 29, 10, 13]
    // console.log(array1.every(isBelowThreshold));
    const isGreaterThan30 = (person : Person) => person['age'] > 30;
    return peopleArray.every(isGreaterThan30);
  }

export {getIsAllAdults}