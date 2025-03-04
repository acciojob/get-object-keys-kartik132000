//your JS code here. If required.
// Create the student object
const student = {
    name: "John",
    age: 20,
    city: "New York"
};

// Function to get all keys from the object
function getKeys(obj) {
    return Object.keys(obj);
}

// Display output on the webpage
document.getElementById("output").textContent = `Object Keys: ${getKeys(student).join(", ")}`;

// Testing in console
console.log(getKeys(student)); // Output: ["name", "age", "city"]
