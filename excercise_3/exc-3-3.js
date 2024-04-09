let persons = [
  { firstName: "Jim", lastName: "Jimithy", age: 15 },
  { firstName: "Peter", lastName: "Peterson", age: 25 },
  { firstName: "Carl", lastName: "Carlson", age: 28 },
  { firstName: "Jane", lastName: "Janison", age: 22 },
];

const oldestPerson = () => {
  const oldest = persons.reduce((currentOldest, person) => {
    return person.age > currentOldest.age ? person : currentOldest;
  }, persons[0]);

  return oldest;
};

console.log(oldestPerson()); // { firstName: 'Carl', lastName: 'Carlson', age: 28 }
