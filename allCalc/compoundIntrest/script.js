function formatNumber(number) {
  const [integerPart, decimalPart] = number.toString().split(".");
  const lastThree = integerPart.slice(-3);
  const otherNumbers = integerPart.slice(0, -3);
  const formattedNumber = otherNumbers
    ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
    : lastThree;
  return decimalPart ? formattedNumber + "." + decimalPart : formattedNumber;
}

function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById("princi").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  const frequency = parseInt(document.getElementById("frequency").value);

  if (isNaN(principal) || principal <= 0) {
    alert("Please enter a valid positive principal amount.");
    return;
  }
  if (isNaN(rate) || rate <= 0) {
    alert("Please enter a valid positive rate of interest.");
    return;
  }
  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid positive time period.");
    return;
  }

  const total = principal * Math.pow(1 + rate / (100 * frequency), frequency * time);
  const compoundInterest = total - principal;

  const effectiveRate = (Math.pow(1 + rate / (100 * frequency), frequency) - 1) * 100;

  console.log("Total Amount: ₹", total.toFixed(2));
  console.log("Compound Interest: ₹", compoundInterest.toFixed(2));
  console.log("Effective Rate: ", effectiveRate.toFixed(2), "%");

  document.getElementById("result").innerHTML = `
    <strong>Total Amount:</strong> ₹${formatNumber(total.toFixed(2))}<br>
    <strong>Compound Interest:</strong> ₹${formatNumber(compoundInterest.toFixed(2))}<br>
    <strong>Effective Annual Percentage Rate:</strong> ${effectiveRate.toFixed(2)}%
  `;
}
