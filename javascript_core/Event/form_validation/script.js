const form = document.getElementById("myForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");

const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  if (username.value.trim() === "") {
    usernameError.textContent = "⚠ Username cannot be empty!";
    isValid = false;
  } else if (username.value.trim().length < 3) {
    usernameError.textContent = "⚠ Username must be at least 3 characters!";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "⚠ Email cannot be empty!";
    isValid = false;
  } else if (!email.value.match(emailPattern)) {
    emailError.textContent = "⚠ Please enter a valid email!";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (password.value.trim() === "") {
    passwordError.textContent = "⚠ Password cannot be empty!";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "⚠ Password must be at least 6 characters!";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm Password validation
  if (confirmPassword.value.trim() === "") {
    confirmError.textContent = "⚠ Please confirm your password!";
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmError.textContent = "⚠ Passwords do not match!";
    isValid = false;
  } else {
    confirmError.textContent = "";
  }

  // Final check
  if (isValid) {
    successMessage.textContent = "✅ Registration successful!";
    form.reset();
    setTimeout(() => {
      successMessage.textContent = "";
    }, 3000); // hide message after 3s
  } else {
    successMessage.textContent = "";
  }
});
