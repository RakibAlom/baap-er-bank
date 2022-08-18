document.getElementById('withdrawSubmit').addEventListener('click', function () {
  const newWithdrawAmount = getValue('withdrawInput');

  // Prvious Withdraw Amount
  const previousWithdrawAmount = totalAmount('withdrawAmount');

  // Calculate New Withdraw Value
  let newTotalAmount = newWithdrawAmount + previousWithdrawAmount;

  // Set Total Withdraw Value
  setTotalValue('withdrawAmount', newTotalAmount);

  // Get Previous Balance By Using The Function
  let previousBalance = totalAmount('currentBalance');
  let newBalanceTotal = previousBalance - newWithdrawAmount;
  setTotalValue('currentBalance', newBalanceTotal);

  let message = document.getElementById('success-message');
  message.innerText = `$${newWithdrawAmount} Withdraw Successfully Done...`;
  alertSuccess.classList.remove('hidden');
})