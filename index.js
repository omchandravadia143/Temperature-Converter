function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const outputDiv = document.getElementById('output');
    const errorDiv = document.getElementById('error');
    
    errorDiv.innerHTML = '';  // Clear any previous error messages
    outputDiv.innerHTML = '';  // Clear previous output

    // Check if the input is a valid number
    const temperature = parseFloat(tempInput);
    if (isNaN(temperature)) {
        errorDiv.innerHTML = 'Please enter a valid number for the temperature.';
        return;
    }

    let convertedTemperature;

    // Convert based on selected units
    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperature * 9/5) + 32;
            outputDiv.innerHTML = `${convertedTemperature.toFixed(2)} °F`;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = temperature + 273.15;
            outputDiv.innerHTML = `${convertedTemperature.toFixed(2)} K`;
        } else {
            outputDiv.innerHTML = `${temperature} °C`;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemperature = (temperature - 32) * 5/9;
            outputDiv.innerHTML = `${convertedTemperature.toFixed(2)} °C`;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            outputDiv.innerHTML = `${convertedTemperature.toFixed(2)} K`;
        } else {
            outputDiv.innerHTML = `${temperature} °F`;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemperature = temperature - 273.15;
            outputDiv.innerHTML = `${convertedTemperature.toFixed(2)} °C`;
        } else if (toUnit === 'fahrenheit') {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            outputDiv.innerHTML = `${convertedTemperature.toFixed(2)} °F`;
        } else {
            outputDiv.innerHTML = `${temperature} K`;
        }
    }
}