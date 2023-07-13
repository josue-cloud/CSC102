    // Meme image element reference
    var imageBox = document.querySelector('.imageBox');

    // Start button element reference
    var startBtn = document.querySelector('.startBtn');
    
    // Stop button element reference
    var stopBtn = document.querySelector('.stopBtn');
    
    // Interval for moving the image
    var moveInterval;
    
    // Function to start moving the meme image
    function startMoving(event) {
        // Prevent default button click behavior
        event.preventDefault();
    
        // Disable the start button and enable the stop button
        startBtn.disabled = true;
        stopBtn.disabled = false;
    
        // Start moving the meme image every second
        moveInterval = setInterval(function () {
            // Generate random x and y translations
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            // Apply translations to the meme image
            imageBox.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        }, 1000);
    }
    
    // Function to stop moving the meme image
    function stopMoving(event) {
        // Prevent default button click behavior
        event.preventDefault();
    
        // Disable the stop button and enable the start button
        stopBtn.disabled = true;
        startBtn.disabled = false;
    
        // Stop moving the meme image
        clearInterval(moveInterval);
    }
    