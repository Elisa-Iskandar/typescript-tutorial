import Person from "../data/people/types";

// Function to demonstrate the slice() method
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function getPersons1to3(peopleArray: Person[]): Person[] {
    // e.g. const slicedArray = peopleArray.slice(start, end);
    // Goal: return a new array of Person objects starting from index 1 to 3
    // return type: Person[]
    //animals.slice(2)
    const slicedArray = peopleArray.slice(0,3)
    return slicedArray;
  }

export {getPersons1to3}