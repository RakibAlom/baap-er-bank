document.getElementById('depositSubmit').addEventListener('click', function() {
  const newDepositAmount = getValue('depositInput');

  // Prviouse Deposit Amount
  const previousDepositAmount = totalAmount('depositAmount');

  // Calculate New Deposit Value
  let newTotalAmount = newDepositAmount + previousDepositAmount;

  // Set Total Deposit Value
  setTotalValue('depositAmount',newTotalAmount);

  // Get Previous Balance By Using The Function
  let previousTotalAmount = totalAmount('currentBalance');
  let newBalanceTotal = newDepositAmount + previousTotalAmount;
  setTotalValue('currentBalance', newBalanceTotal);
  
  let message = document.getElementById('success-message');
  message.innerText = `$${newDepositAmount} Deposit Successfully Done. Thank you!`;
  alertSuccess.classList.remove('hidden');
})

