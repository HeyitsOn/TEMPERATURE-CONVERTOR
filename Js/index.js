function convertTemperature() {
    // Get input values
    let celsius = parseFloat(document.getElementById('celsiusInput').value) || 0;
    
    // Perform the conversion
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    // Update the other input fields
    document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
    document.getElementById('kelvinInput').value = kelvin.toFixed(2);
}

function clearInputs() {
    // Clear all input fields
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('kelvinInput').value = '';
}