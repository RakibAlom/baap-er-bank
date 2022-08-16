// Deposit Event Handler
let depositSubmit = document.getElementById('depositSubmit');
depositSubmit.addEventListener('click',function() {
  // Get Previous Deposit Amount
  let getDepositAmount = document.getElementById('depositAmount');
  let depositAmount = parseFloat(getDepositAmount.innerText);

  // Get Current Amount
  let getCurrentAmount = document.getElementById('currentAmount');
  let currentAmount = parseFloat(getCurrentAmount.innerText);

  // Get New Input Amount
  let newInputAmount = document.getElementById('deposit-amount').value;
  let newAmount = parseFloat(newInputAmount);

  // Get Total Deposit Amount
  let totalDepositAmount = depositAmount + newAmount;

  // Show Total Deposit Amount & Current Ammount
  getDepositAmount.innerText = totalDepositAmount;
  getCurrentAmount.innerText = currentAmount + newAmount;
})