function isPalindrome(strTest){
//replace (/\s/g, "") removes all the spaces in the string
//then convert all the letters to lowercase

    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    //turn the strings into ana array, reverse the contents of an array
    //turn the array back into a string
    var strRev = strCleaned.split("").reverse().join("");

    return strRev == strCleaned;
}
//console.log(isPalindrome("abcd"));
//console.log(isPalindrome("radar"));
//console.log(isPalindrome("A man a plan a canal panama"));

var bContinue = true;
do{
    //get a word from the user
    var userInput = prompt("Enter a word to test if it is a palindrome: ");

    //test the word with our function
    var isPalin = isPalindrome(userInput);
    var message ="";

    //create a message based on whether the word was a palindrome or not
    if (isPalin){
        message = userInput + " is a palindrome";
    }
    else{
        message = userInput + " is not a palindrome!";
    }
    //show the message to the user
    alert(message);

    //ask user is they want to continue
    var answer = prompt("Do you want to continue? (y/n) ");

    if (answer.toLowerCase() == "n"){
        bContinue = false;
    }
}while(bContinue);