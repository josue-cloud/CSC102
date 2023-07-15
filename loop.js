// Function to validate the inputs
function validateInputs() {
    // Get the input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const zipCode = document.getElementById('zipCode').value;

    // Combine the first and last names
    const fullName = firstName + ' ' + lastName;

    // Check if the name is more than 20 characters
    if (fullName.length > 20) {
        // If invalid, display a warning and return
        document.getElementById('nameWarning').textContent = 'Name should be no more than 20 characters.';
        return;
    } else {
        // If valid, clear the warning
        document.getElementById('nameWarning').textContent = '';
    }

    // Check if the zip code is exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        // If invalid, display a warning and return
        document.getElementById('zipWarning').textContent = 'Zip code should be exactly 5 digits.';
        return;
    } else {
        // If valid, clear the warning
        document.getElementById('zipWarning').textContent = '';
    }

    // If all inputs are valid, display the secret message
    document.getElementById('secretMessage').style.display = 'block';
}
