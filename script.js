// 


// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}
 var student = {
  name: "Alice",
  age: 22,
  city: "Delhi"
};

// Testing the function
console.log(getKeys(student2)); // ["name", "age", "city"]

// Additional test


var student = {
  name: "John",
};


console.log(getKeys(student)); // ["name"]
