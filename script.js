//your JS code here. If required.
// Function to convert content to uppercase when input field loses focus
function capitalizeName() {
    const inputField = document.getElementById('fname'); // Get the input field by its ID
    inputField.value = inputField.value.toUpperCase(); // Convert the value to uppercase
}

// Add an event listener to the input field to call capitalizeName on blur
document.getElementById('fname').addEventListener('blur', capitalizeName);
