// Get update deposit & withdraw and balance using function.........
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldFloatValue = parseFloat(inputFieldValue);
    inputField.value = "";
    return inputFieldFloatValue;
}
