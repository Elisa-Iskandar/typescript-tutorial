import Person from "../data/people/types";

// Function to demonstrate the some() method
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
function getIsSomeAdults(peopleArray: Person[]): boolean {
    // e.g. const isAdult = peopleArray.some(callback);
    // Goal: return a boolean value indicating whether there is at least one Person object whose age is greater than or equal to 18
    // return type: boolean
    //const even = (element) => element % 2 === 0;
    function areTheyAdult(person : Person) {
      if (person['age'] >= 18) {
        return true;
      } else {
        return false;
      }
    }
    const isAdult = peopleArray.some(areTheyAdult)
    return isAdult;
  }

export {getIsSomeAdults}