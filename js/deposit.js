let inputDepositAmount = document.getElementById('deposit-amount');
let depositSubmit = document.getElementById('depositSubmit');

// Enable Deposit Button
inputDepositAmount.addEventListener('keyup', function() {
  if(inputDepositAmount.value != "") {
    depositSubmit.removeAttribute('disabled');
  } else {
    depositSubmit.setAttribute('disabled', true);
  }
});

// Deposit Event Handler
depositSubmit.addEventListener('click',function() {
  // Get New Input Amount
  let newInputAmount = document.getElementById('deposit-amount');
  let newAmount = parseFloat(newInputAmount.value);
  newInputAmount.value = '';
  depositSubmit.setAttribute('disabled', true);
  if(isNaN(newAmount)) {
    return alert('Please, enter valid number')
  }


  // Get Previous Deposit Amount
  let getDepositAmount = document.getElementById('depositAmount');
  let depositAmount = parseFloat(getDepositAmount.innerText);

  // Get Current Amount
  let getCurrentAmount = document.getElementById('currentAmount');
  let currentAmount = parseFloat(getCurrentAmount.innerText);

  // Get Total Deposit Amount
  let totalDepositAmount = depositAmount + newAmount;

  // Show Total Deposit Amount & Current Ammount
  getDepositAmount.innerText = totalDepositAmount;
  getCurrentAmount.innerText = currentAmount + newAmount;

  // show alert
  let alert = document.getElementById('alert');
  let alertText = document.getElementById('alert-text');
  alert.classList.remove('hidden');
  alertText.innerText = `$${newAmount} Deposit Successfully Done, Thank you!`;
})