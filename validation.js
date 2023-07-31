function validateForm(){
    //variables to hold our form inputs
    var firstName = document.theForm.firstName.value;
    var lastName = document.theForm.lastName.value;
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
        errMessage.innerHTML = "The first and last name combined must be less than 20 characters.";
        return false;

    }

    //check if the zip code is exactly 5 characters
    if (zipCode.length != 5){
        errMessage.innerHTML = "The zip code must be exactly 5 digits.";
        return false;
    }

    //display the secret message
    document.getElementById("secretMessage").innerHTML = "The answer to everything is 42.";
    return false; //if this was an actual form it should return true
}