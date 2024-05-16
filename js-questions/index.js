// questions will fall in this section

const users = [
  {
    id: 1,
    name: "John",
    age: 23,
  },
  {
    id: 2,
    name: "Mira",
    age: 21,
  },
  {
    id: 3,
    name: "Devil",
    age: 19,
  },
  {
    id: 4,
    name: "Jack",
    age: 25,
  },
];

const names = users.map((person) => person.name);
console.log(names);
