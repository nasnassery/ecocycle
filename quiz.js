// =========================================
// Recycling Quiz
// =========================================

// The correct answer for each question
var answers = {
  q1: "b",
  q2: "c",
  q3: "b",
  q4: "a",
  q5: "b"
};

// This function runs when the user clicks "Submit"
function checkQuiz(event) {
  event.preventDefault();   // stop the page from reloading

  var score = 0;
  var total = 5;
  var errorText = document.getElementById("quizError");
  errorText.innerHTML = "";

  // Loop through the 5 questions
  for (var i = 1; i <= total; i++) {
    var name = "q" + i;

    // Find the radio button the user selected for this question
    var selected = document.querySelector('input[name="' + name + '"]:checked');

    // Validation: every question must be answered
    if (selected == null) {
      errorText.innerHTML = "Please answer question " + i + ".";
      return;
    }
  }

  // All questions answered, now check them
  for (var i = 1; i <= total; i++) {
    var name = "q" + i;
    var selected = document.querySelector('input[name="' + name + '"]:checked');
    var questionBox = selected.parentElement.parentElement;

    if (selected.value == answers[name]) {
      score = score + 1;
      questionBox.className = "question correct";
    } else {
      questionBox.className = "question wrong";
    }
  }

  // Show the score with a message
  var message = "";
  if (score == 5) {
    message = "Excellent! You are a recycling expert!";
  } else if (score >= 3) {
    message = "Good job! You know a lot about recycling.";
  } else {
    message = "Keep learning! Visit the Recycling Types page.";
  }

  document.getElementById("score").innerHTML =
    "Your score: " + score + " / " + total + "<br>" + message;
}
