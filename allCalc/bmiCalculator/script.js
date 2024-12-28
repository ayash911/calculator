function toggleHeightInputs() {
  const heightUnit = document.getElementById("height-unit").value;
  const heightInput = document.getElementById("height");
  const heightInputs = document.getElementById("height-inputs");

  if (heightUnit === "feet-inches") {
    document.getElementById("height-unit").style.marginTop = "10px";
    heightInput.style.display = "none";
    heightInputs.style.display = "flex";
  } else {
    document.getElementById("height-unit").style.marginTop = "0px";
    heightInput.style.display = "block";
    heightInputs.style.display = "none";
  }
}

function calculateBMI() {
  const heightUnit = document.getElementById("height-unit").value;
  const weight = parseFloat(document.getElementById("weight").value);
  let heightInMeters;

  if (isNaN(weight)) {
    document.getElementById("result").innerText =
      "Please enter a valid weight.";
    return;
  }

  if (heightUnit === "meters") {
    heightInMeters = parseFloat(document.getElementById("height").value);
  } else if (heightUnit === "centimeters") {
    heightInMeters = parseFloat(document.getElementById("height").value) / 100;
  } else if (heightUnit === "feet-inches") {
    const feet = parseFloat(document.getElementById("feet").value) || 0;
    const inches = parseFloat(document.getElementById("inches").value) || 0;
    heightInMeters = feet * 0.3048 + inches * 0.0254;
  }

  if (isNaN(heightInMeters) || heightInMeters <= 0) {
    document.getElementById("result").innerText =
      "Please enter a valid height.";
    return;
  }

  const bmi = weight / (heightInMeters * heightInMeters);
  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)}`;
}
