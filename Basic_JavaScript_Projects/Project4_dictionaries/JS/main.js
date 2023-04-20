var birdDictionary = {
  "parrot": "a colorful bird that can mimic sounds",
  "penguin": "a flightless bird that lives in the Antarctic",
  "owl": "a nocturnal bird of prey"
};

// Define a function 
function outputBirdInfo() {
  // Pick a bird from the dictionary
  var birdKeys = Object.keys(birdDictionary); 
  var randomKey = birdKeys[Math.floor(Math.random() * birdKeys.length)]; // Choose a random key from the array

  // Remove chosen key from dictionary
  delete birdDictionary[randomKey];
  //Output the chosen key 
  var outputElement = document.getElementById("bird-info");
  outputElement.innerHTML = "<strong>" + randomKey + ":</strong> " + birdDictionary[randomKey];
}
outputBirdInfo();