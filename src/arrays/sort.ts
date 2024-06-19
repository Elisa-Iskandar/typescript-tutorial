import Person from "../data/people/types";

// Function to demonstrate the sort() method
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortByAge(peopleArray: Person[]): Person[] {
    // e.g. const sortedArray = peopleArray.sort(callback);
    // Goal: return a new array of Person objects sorted by age in ascending order
    // return type: Person[]
    function compareElements(person1 : Person, person2: Person) {
      if (person1['age']<person2['age']) {
        return -1;
      } else if (person1['age']>person2['age']) {
        return 1;
      } else {
        return 0;
      }
    }
    const sortedArray = peopleArray.sort(compareElements);
    return sortedArray;
  }

export {sortByAge}