// =========================================
// Recycling Calculator
// =========================================

// Estimated savings for every 1 kg recycled (rough numbers for awareness).
var co2Saved = {
  plastic: 1.5,
  paper: 0.9,
  metal: 9,
  ewaste: 2
};

var energySaved = {
  plastic: 5.7,
  paper: 4.1,
  metal: 14,
  ewaste: 6
};

// This function runs when the user clicks "Calculate"
function calculate() {
  // 1. Read what the user entered
  var material = document.getElementById("material").value;
  var weight = document.getElementById("weight").value;

  var errorText = document.getElementById("error");
  var resultBox = document.getElementById("result");

  // Clear old messages
  errorText.innerHTML = "";
  resultBox.innerHTML = "";

  // 2. Check the input (validation)
  if (material == "") {
    errorText.innerHTML = "Please choose a material.";
    return;
  }

  if (weight == "" || weight <= 0) {
    errorText.innerHTML = "Please enter a weight greater than 0.";
    return;
  }

  // 3. Calculate the results
  var co2 = weight * co2Saved[material];
  var energy = weight * energySaved[material];

  // 4. Show the results on the page
  resultBox.innerHTML =
    "By recycling " + weight + " kg you save about:<br>" +
    "🌍 " + co2.toFixed(1) + " kg of CO₂<br>" +
    "⚡ " + energy.toFixed(1) + " kWh of energy";
}
