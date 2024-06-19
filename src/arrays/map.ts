import Person from "../data/people/types";

// Function to demonstrate the map() method
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
function getNames(peopleArray: Person[]): string[] {
    // e.g. const namesArray = peopleArray.map(callback);
    // Goal: return an array of names which is an array of strings
    // e.g. ['Alice', 'Bob', 'Charlie']
    function getNameFromPerson(person: Person) {
      return person['name'];
    }
    const namesArray = peopleArray.map(getNameFromPerson)
    return namesArray;
  }

  export {getNames}