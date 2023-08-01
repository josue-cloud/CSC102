var plants = [
    "Spider plant",
    "orchid",
    "Pothos",
    "Succulent",
    "Lavender",
    "Money Tree",
    "Jasmine",
    "Fern",
    "Cactus",
    "Lucky Bamboo",
    "Daisy",
    "Geranium",
];

var arrGameNames = [ 
    "The witcher 3",
    "Fortnite",
    "Minecraft",
    "Call of duty",
    "Roblox",
];

var arrPlayTime = [
    "50 hours",
    "60 hours",
    "100 hours",
    "200 hours",
    "2000 hours",
];

// Loop through the plant array and show the contents on the page
function showPlants() {
    var plantDiv = document.getElementById("plantsContainer");
    var button = document.querySelector("button");
    var plantList = document.createElement("ul");
    plantDiv.appendChild(plantList);

    for (var i = 0; i < plants.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = plants[i];
        plantList.appendChild(listItem);
    }

    // Load the video game stats
    showStats();

    // Remove the button once we have displayed the plants
    button.remove();
}

function showStats() {
    var statsContainer = document.getElementById("statsContainer");
    var statsList = document.createElement("ul");
    statsContainer.appendChild(statsList);

    for (var i = 0; i < arrGameNames.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = arrGameNames[i] + ": " + arrPlayTime[i];
        statsList.appendChild(listItem);
    }
}