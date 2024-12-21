function convertDistance() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const value = parseFloat(document.getElementById("value").value);
  
    if (isNaN(value)) {
      document.getElementById("result").textContent =
        "Please enter a valid number.";
      return;
    }
  
    const conversionRates = {
      mil: 0.0000254,
      in: 0.0254,
      μm: 0.000001,
      nm: 0.000000001,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.34,
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
    };
  
    const result = (value * conversionRates[from]) / conversionRates[to];
    document.getElementById(
      "result"
    ).textContent = `${value} ${from} is equal to ${result} ${to}`;
  }
  