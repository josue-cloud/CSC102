//track the current interval
var intervalId = 0;

//function fires when the user clicks the start button
//image will move randomly around the screen every second
function start() {
    //pointer to the image on the index page
    var image = document.getElementById("memeImage");
    
    //creates 2 variables, both variables will choose a random number to mive the image around the screen
    var changeX = getRandomNumber();
    var changeY = getRandomNumber();

    //this code will move image around the top and left coordinates
    //this code will run everuy  second
    intervalId = setInterval(function(){
        //var changeX = getElementById();
        //var changeY = getRandomNumber();

        //moves our image to the left by the ammount defined and uses the px measurements
        image.style.left = changeX + "px";
        //moves to the image to the top of the page by the ammount defined and uses the px 
        image.style.top = changeY + "px";
 
        //calls for the image to move to the left
        console.log("x=" + changeX);
        //calls for the image to be moved to the top
        console.log("y=" + changeY);

        //sets the parameter that the image moves every time it is called on
        changeX += 5;
        changeY += 5;
        }, 1000);
}

//get a random number
function getRandomNumber(){
    //this function wil return a number between 0 and 1 but uses 800 as a specified parameter
    return Math.floor(Math.random() * 800);
}

//function fires when the user clicks the stop button
//image will stop moving around the screen
function stop(){
    //this functions clears the interval and stops the images from moving
    clearInterval(intervalId);
}