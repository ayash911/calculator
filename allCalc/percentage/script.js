function calculateBasic() {
    console.log('Basic percentage calculation initiated.');
    const percentage = parseFloat(document.getElementById('percentage').value);
    const ofValue = parseFloat(document.getElementById('ofValue').value);
    console.log('Inputs received: Percentage:', percentage, 'Value:', ofValue);

    if (isNaN(percentage) || isNaN(ofValue)) {
      alert('Please enter valid numbers for both fields.');
      console.log('Invalid input detected.');
      return;
    }

    const result = (percentage / 100) * ofValue;
    console.log('Calculated result:', result);
    const resultDiv = document.getElementById('basicResult');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `${percentage}% of ${ofValue} is ${result}`;
  }

  function clearBasic() {
    console.log('Clearing basic percentage calculator fields.');
    document.getElementById('percentage').value = '';
    document.getElementById('ofValue').value = '';
    document.getElementById('basicResult').style.display = 'none';
  }

  function calculateDifference() {
    console.log('Percentage difference calculation initiated.');
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    console.log('Inputs received: Value 1:', value1, 'Value 2:', value2);

    if (isNaN(value1) || isNaN(value2)) {
      alert('Please enter valid numbers for both values.');
      console.log('Invalid input detected.');
      return;
    }

    const difference = Math.abs(value1 - value2);
    const percentageDifference = (difference / ((value1 + value2) / 2)) * 100;
    console.log('Calculated percentage difference:', percentageDifference);
    const resultDiv = document.getElementById('differenceResult');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `The percentage difference between ${value1} and ${value2} is ${percentageDifference.toFixed(2)}%`;
  }

  function clearDifference() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('differenceResult').style.display = 'none';
  }