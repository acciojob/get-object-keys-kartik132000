// Create an object with a getKeys method
const student = {
    name: "John",
    age: 20,
    city: "New York",
    
    // Method to get all keys of the object
    getKeys: function () {
        return Object.keys(this).filter(key => key !== "getKeys"); 
    }
};

// Expose student for Cypress tests
window.student = student;

// Get the output element
document.addEventListener("DOMContentLoaded", function () {
    const outputElement = document.getElementById("output");

    // Ensure the element exists before setting textContent
    if (outputElement) {
        outputElement.textContent = `Object Keys: ${student.getKeys().join(", ")}`;
    }

    // Log output in console for debugging
    console.log(student.getKeys()); // Output: ["name", "age", "city"]
});
