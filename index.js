const btnElement = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalSpan = document.getElementById('total');
const msg = document.getElementById('msg');

function calculateTotal() {
  const bill = parseFloat(billInput.value);
  const tip = parseFloat(tipInput.value);

  msg.classList.remove('error');
  msg.textContent = "";

  // Validation
  if (isNaN(bill) || bill < 0) {
    msg.textContent = "Please enter a valid bill amount.";
    msg.classList.add('error');
    totalSpan.textContent = "0.00";
    return;
  }

  if (isNaN(tip) || tip < 0) {
    msg.textContent = "Please enter a valid tip percentage.";
    msg.classList.add('error');
    totalSpan.textContent = bill.toFixed(2);
    return;
  }

  const total = bill + (bill * tip / 100);
  totalSpan.textContent = total.toFixed(2);
}

btnElement.addEventListener("click", calculateTotal);

// Press Enter to calculate
[billInput, tipInput].forEach(el => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calculateTotal();
  });
});
