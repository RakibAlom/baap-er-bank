// Step 1: Get email & password
let email = document.getElementById('email-address');
let password = document.getElementById('password');

// Step 2: Enable sign in button if input email & password
email.addEventListener('keyup', function() {
  if(email.value != "") {
    login.removeAttribute('disabled');
  } else {
    login.setAttribute('disabled', true)
  }
})

// Step 3: Create a event handler when click sign in button
let login = document.getElementById('login');
login.addEventListener('click', function() {
  if(email.value == "rakib@bank.com" && password.value == "1234"){
    console.log('baaper account khulja sim sim')
    window.location.href = 'bank.html';
  } else {
    alert('Email or Password is invalid!');
  }
})