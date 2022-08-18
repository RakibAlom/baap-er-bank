// Get login button & add event handler
const loginSubmit = document.getElementById('login-submit');
loginSubmit.addEventListener('click', function() {
  let email = document.getElementById('email');
  let password = document.getElementById('password');

  if(email.value == "rakib@bank.com" && password.value == "1234") {
    window.location.href = "bank.html";
  } else {
    return alert("Email or Password didn't matched!");
  }
})