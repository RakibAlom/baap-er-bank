// Deposit Update
let depositAmount = document.getElementById('depositAmount');
depositAmount = parseFloat(depositAmount.innerText);

let currentAmount = document.getElementById('currentAmount');
currentAmount = parseFloat(currentAmount.innerText);

// Deposit Event Handler
let depositSubmit = document.getElementById('depositSubmit');
depositSubmit.addEventListener('click',function() {
  let newAmount = document.getElementById('deposit-amount').value;
  newAmount = parseFloat(newAmount);
  let totalDepositAmount = depositAmount + newAmount;
  depositAmount.innerText = totalDepositAmount;
  console.log(depositAmount)
  currentAmount.innerText = currentAmount + newAmount;

})