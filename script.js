//your JS code here. If required.
const student = {
  name: "John",
	age:20,
	city:"Jaipur"
};
function getKeys(obj){
	return Object.keys(obj);
}
console.log(getKeys(student));