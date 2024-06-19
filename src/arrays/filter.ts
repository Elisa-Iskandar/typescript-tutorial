import Person from "../data/people/types";

// Function to demonstrate the filter() method
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
function getPeopleAbove30(peopleArray: Person[]): Person[] {
    // e.g. const adultsArray = peopleArray.filter(callback);
    // Goal: return an array of Person objects whose age is greater than 30
    // Example :
    // before: [{ name: 'Alice', age: 35 }, { name: 'Bob', age: 40 }, { name: 'Charlie', age: 20 }, { name: 'David', age: 30 }]
    // after: [{ name: 'Alice', age: 35 }, { name: 'Bob', age: 40 }]
    //const result = words.filter((word) => word.length > 6);
    const adultsArray = peopleArray.filter((person : Person) => person['age']>30)
    return adultsArray;
  }

  export {getPeopleAbove30}