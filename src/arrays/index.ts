import Person from "../data/people/types";

/* All functions here accept the peopleArray as an argument
 the peopleArray is an array of Person objects
 the person object has multiple properties, such as name and age
 e.g. { name: 'Alice', age: 30, city: 'Kuala Lumpur', ... }
 refer to the Person type in data/people/types.ts for more information */

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

export {
  getNames,
  getPeopleAbove30,
  findFirstAbove30,
  getIsSomeAdults,
  getIsAllAdults,
  getPersons1to3,
  sortByAge,
};


