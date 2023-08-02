//this function will add a sound element to our html page
//using the DOM (document object model)
function addSound(){
    //create an html audio element
    var soundElem = document.createElement("AUDIO");

    //sets the id so you can refer to the element easily
    //-in future javascript code.
    soundElem.setAttribute("id","mySound");
    //set the file name of the sound file
    soundElem.setAttribute("src","space.m4a");
    //shows the controls for the audio
    soundElem.setAttribute("controls","controls");

    //after the audio element is set up, add it to the webpage
    document.body.appendChild(soundElem);

//now unhide the play and pause button
    document.getElementById("btnPlay").hidden = false;
    document.getElementById("mySound").hidden = false;
}

//this function will be fired from the btnPlay click event
//it will play the audio
function play(){
    var audio = document.getElementById("mySound");
    audio.play();
}

//this function will be fired from the btnPause click event
//it will pause the audio
function pause(){
    
}