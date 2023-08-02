//creates a function to be called to validate the user's entry in the form
function validateForm(){
    //variables to hold our form inputs like first name
    var firstName = document.theForm.firstName.value;
    //variables to hold our user's last name
    var lastName = document.theForm.lastName.value;
    //variables to hold our user's zip code
    var zipCode = document.theForm.zipCode.value;
    //var zipCode = document.getElementById("zipCode").value;
    var errMessage = document.getElementById("errorMessage");
    //clear out any existing error messages
    errMessage.innerHTML = "";

    //combines first and least name
    var fullName = firstName + " " + lastName;

    //chack the length of the name, make sure it is 20 characters or less
    //also, check to make sure at least 1 character has been added to the name text boxes.
    if(fullName.length > 20 || fullNamme.length == 1){
        //displays an error message is the first and last name is less than 20 characters long
        errMessage.innerHTML = "The first and last name combined must be less than 20 characters.";
        //if the first and last names add to more than 20 characters the program will not accept it
        return false;

    }

    //check if the zip code is exactly 5 characters
    if (zipCode.length != 5){
        //displays an error message is the zip code is more than or less that 5 digits
        errMessage.innerHTML = "The zip code must be exactly 5 digits.";
        //if the zip code is not exactly 5 digits our program will not accept it and return our function as false
        return false;
    }

    //display the secret message
    document.getElementById("secretMessage").innerHTML = "The answer to everything is 42.";
    return false; //if this was an actual form it should return true
}