const button = document.querySelector("button");

const result = document.getElementById("result");
function calculate() {
  let bill = parseFloat(document.getElementById("bill").value);
  let tip = parseFloat(document.getElementById("tip").value);
  if (isNaN(bill) || bill <= 0) {
    result.textContent = "Please enter a valid number.";
    return;
  }
  if (isNaN(tip) || tip < 0) {
    result.textContent = "Please enter a valid number.";
    return;
  } else {
    bill = bill + (bill * tip) / 100;
    result.textContent = `Total: ${bill.toFixed(2)}`;
  }
}
