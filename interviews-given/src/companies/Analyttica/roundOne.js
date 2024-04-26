const ids = [
  { name: "name1", city: "india-city1" },
  { name: "name2", city: "india-city2" },
  { name: "name3", city: "japan-city3" },
  { name: "name4", city: "japan-city4" },
];

function findIndian(ids) {
  const indianPeoples = ids.filter(
    (person) => person.city.split("-")[0] === "india"
  );
  return indianPeoples;
}

console.log(findIndian(ids));

// Create a closure.
function outer() {
  let a = 1;
  function inner() {
    console.log(a + 2);
  }
  inner();
}

outer();
