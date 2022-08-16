let inputAmount = document.getElementById('withdraw-amount');
let withdrawSubmit = document.getElementById('withdrawSubmit');

// Enable Withdraw Button
inputAmount.addEventListener('keyup', function () {
  if(inputAmount.value != ""){
    withdrawSubmit.removeAttribute('disabled');
  } else {
    withdrawSubmit.setAttribute('disabled', true);
  }
})

// Withdraw Event Handler
withdrawSubmit.addEventListener('click', function() {
  // Get Withdraw Input Amount
  let newInputAmount = document.getElementById('withdraw-amount');
  let newWithdrawAmount = parseFloat(newInputAmount.value);
  newInputAmount.value = '';
  withdrawSubmit.setAttribute('disabled', true);

  // If Input Value Not Pure Number
  if(isNaN(newWithdrawAmount)) {
    return alert('please, enter valid number')
  }

  // Get Previous Withdraw Amount
  let getWithdrawAmount = document.getElementById('withdrawAmount');
  let withdrawAmount = parseFloat(getWithdrawAmount.innerText);

  // Get Current Amount
  let getCurrentAmount = document.getElementById('currentAmount');
  let currentAmount = parseFloat(getCurrentAmount.innerText);

   // If Withdraw Amount More Then Current Ammount
   if(newWithdrawAmount > currentAmount) {
    return alert('please, you have not enough amount!');
  }

  // Get Total Withdraw Amount
  let totalWithdrawAmount = withdrawAmount + newWithdrawAmount;
  let totalCurrentAmmount = currentAmount - newWithdrawAmount;

  // Show Total Withraw & Current Amount 
  getWithdrawAmount.innerText = totalWithdrawAmount;
  getCurrentAmount.innerText = totalCurrentAmmount;

  // show alert
  let alert = document.getElementById('alert');
  let alertText = document.getElementById('alert-text');
  alert.classList.remove('hidden');
  alertText.innerText = `$${newWithdrawAmount} Withdraw Successfully Done!`;
  
})