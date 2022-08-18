document.getElementById('withdrawSubmit').addEventListener('click', function () {

  const newWithdrawAmount = getValue('withdrawInput');

  // Check value is valid
  if(isNaN(newWithdrawAmount)) {
    return ;
  }

  // Get Previous Balance By Using The Function
  let previousBalance = totalAmount('currentBalance');

  // Check if withraw amount bigger then current balance
  if (newWithdrawAmount > previousBalance) {
    warnMessage.innerText = "Sorry, You have not enough balance!"
    return alertWarning.classList.remove('hidden');
  }

  // Prvious Withdraw Amount
  const previousWithdrawAmount = totalAmount('withdrawAmount');

  // Calculate New Withdraw Value
  let newTotalAmount = newWithdrawAmount + previousWithdrawAmount;

  // Set Total Withdraw Value
  setTotalValue('withdrawAmount', newTotalAmount);

  let newBalanceTotal = previousBalance - newWithdrawAmount;
  setTotalValue('currentBalance', newBalanceTotal);

  // Success Message
  message.innerText = `$${newWithdrawAmount} Withdraw Successfully Done...`;
  alertSuccess.classList.remove('hidden');
})