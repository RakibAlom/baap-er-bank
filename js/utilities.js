// Get Value From Input Field
function getValue(input) {
  const inputValue = document.getElementById(input);
  let inputAmount = parseFloat(inputValue.value);
  inputValue.value = '';
  if(isNaN(inputAmount)) {
    let message = document.getElementById('warning-message');
    message.innerText = `Semething Went Wrong...`;
    alertWarning.classList.remove('hidden');
    return;
  }

  return inputAmount;
  
}

// Get Total Amount From New Input Value
function totalAmount (elementId) {
  const textElement = document.getElementById(elementId);
  const elementValue = parseFloat(textElement.innerText);
  return elementValue;
}

// Set Total Value
function setTotalValue (elementId, newValue) {
  const elementText = document.getElementById(elementId);
  elementText.innerText = newValue;
}

// Alert Function
let alertSuccess = document.getElementById('alert-success');
let alertWarning = document.getElementById('alert-warning');

function successAlertClose() {
  return alertSuccess.classList.add("hidden");
};
function warningAlertClose() {
  return alertWarning.classList.add("hidden");
};