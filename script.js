// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // ["name"]

// Additional test
const student2 = {
  name: "Alice",
  age: 22,
  city: "Delhi"
};

console.log(getKeys(student2)); // ["name", "age", "city"]
