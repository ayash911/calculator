function formatNumber(number) {
  const [integerPart, decimalPart] = number.toString().split(".");
  const lastThree = integerPart.slice(-3);
  const otherNumbers = integerPart.slice(0, -3);
  const formattedNumber = otherNumbers
    ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
    : lastThree;
  return decimalPart ? formattedNumber + "." + decimalPart : formattedNumber;
}

function calculateInterest() {
  const principal = parseFloat(document.getElementById("princi").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

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

  const simpleInterest = (principal * rate * time) / 100;
  const total = principal + simpleInterest;

  console.log("Total Amount: ₹", total.toFixed(2));
  console.log("Simple Interest: ₹", simpleInterest.toFixed(2));
  console.log("Principal: ₹", principal);
  console.log("Rate: ", rate);
  console.log("Time: ", time);
  

  document.getElementById("result").innerHTML = `
    <strong>Total Amount:</strong> ₹${formatNumber(total.toFixed(2))}<br>
    <strong>Simple Interest:</strong> ₹${formatNumber(simpleInterest.toFixed(2))}
  `;
}
