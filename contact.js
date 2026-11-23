// =========================================
// Contact Form Validation
// =========================================

// This function runs when the user clicks "Send"
function validateForm(event) {
  event.preventDefault();   // stop the form from submitting/reloading

  // 1. Get the values (trim removes extra spaces)
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();

  // 2. Clear old messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";
  document.getElementById("success").innerHTML = "";

  var isValid = true;

  // 3. Check the name (at least 3 letters)
  if (name.length < 3) {
    document.getElementById("nameError").innerHTML = "Name must be at least 3 characters.";
    isValid = false;
  }

  // 4. Check the email (must contain @ and a dot after it)
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition == email.length - 1) {
    document.getElementById("emailError").innerHTML = "Please enter a valid email.";
    isValid = false;
  }

  // 5. Check the phone ONLY if the user typed one (10 digits)
  if (phone != "" && (isNaN(phone) || phone.length != 10)) {
    document.getElementById("phoneError").innerHTML = "Phone must be 10 digits.";
    isValid = false;
  }

  // 6. Check the message (at least 10 characters)
  if (message.length < 10) {
    document.getElementById("messageError").innerHTML = "Message must be at least 10 characters.";
    isValid = false;
  }

  // 7. If everything is correct, show a thank-you message
  if (isValid) {
    document.getElementById("success").innerHTML = "Thank you, " + name + "! Your message has been sent.";
    document.getElementById("contactForm").reset();
  }
}
