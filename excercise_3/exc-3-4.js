let persons = [
  { firstName: "Jim", lastName: "Jimithy", age: 15 },
  { firstName: "Peter", lastName: "Peterson", age: 25 },
  { firstName: "Carl", lastName: "Carlson", age: 28 },
  { firstName: "Jane", lastName: "Janison", age: 22 },
];

persons.map((e) => {
  e.luckyNumber = `${e.firstName}${e.lastName}`.length;
  return persons;
});

console.log(persons);

// Output:
// [ { firstName: 'Jim', lastName: 'Jimithy', age: 15, luckyNumber: 11 },
//   { firstName: 'Peter', lastName: 'Peterson', age: 25, luckyNumber: 14 },
//   { firstName: 'Carl', lastName: 'Carlson', age: 28, luckyNumber: 12 },
//   { firstName: 'Jane', lastName: 'Janison', age: 22, luckyNumber: 12 } ]
