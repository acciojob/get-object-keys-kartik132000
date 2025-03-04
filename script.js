document.addEventListener("DOMContentLoaded", function () {
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

    // Get the output element
    const outputElement = document.getElementById("output");

    // Ensure the element exists before setting textContent
    if (outputElement) {
        outputElement.textContent = `Object Keys: ${getKeys(student).join(", ")}`;
    }

    // Log output in console for testing
    console.log(getKeys(student)); // Output: ["name", "age", "city"]
});
