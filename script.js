document.addEventListener("DOMContentLoaded", function () {
    // Create the student object with getKeys as a method
    const student = {
        name: "John",
        age: 20,
        city: "New York",
        getKeys: function () {
            return Object.keys(this);
        }
    };

    // Get the output element
    const outputElement = document.getElementById("output");

    // Ensure the element exists before setting textContent
    if (outputElement) {
        outputElement.textContent = `Object Keys: ${student.getKeys().join(", ")}`;
    }

    // Log output in console for debugging
    console.log(student.getKeys()); // Output: ["name", "age", "city", "getKeys"]
});
