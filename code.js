//track the current interval
var intervalId = 0;

//function fires when the user clicks the start button
//image will move randomly around the screen every second
function start() {
    //pointer to the image on the index page
    var image = document.getElementById("memeImage");
    
    var changeX = getRandomNumber();
    var changeY = getRandomNumber();

    //this code will move image around the top and left coordinates
    //this code will run everuy  second
    intervalId = setInterval(function(){
        //var changeX = getElementById();
        //var changeY = getRandomNumber();

    
        image.style.left = changeX + "px";
        image.style.top = changeY + "px";

        console.log("x=" + changeX);
        console.log("y=" + changeY);

        changeX += 5;
        changeY += 5;
        }, 1000);
}

//get a random number
function getRandomNumber(){
    return Math.floor(Math.random() * 800);
}

//function fires when the user clicks the stop button
//image will stop moving around the screen
function stop(){
    clearInterval(intervalId);
}