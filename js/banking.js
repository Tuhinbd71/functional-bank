// user login Form section
document.getElementById("submit-btn").addEventListener("click", function () {
    // get user email
    const inputField = document.getElementById("user-email");
    userEmail = inputField.value;
    // get user password
    const userPassword = document.getElementById("user-password");
    const userPasswordValue = userPassword.value;
    if (userEmail == "m.tuhinbd@gmail.com" && userPasswordValue == "THN@00dotcom") {
        window.location.href = "banking.html"
    }
    else {
        console.log("Please! input valid value")
    }
})
// Get update deposit & withdraw and balance using function.........
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldFloatValue = parseFloat(inputFieldValue);
    inputField.value = "";
    return inputFieldFloatValue;
}
// get update Deposit & withdraw field using function.......
function depositWithdrawField(depositWithdrawAdd, newDepositValue) {
    const depositField = document.getElementById(depositWithdrawAdd);
    const previousDepositAmount = depositField.innerText;
    const previousDepositAmountValue = parseFloat(previousDepositAmount);
    const newDdepositTotal = previousDepositAmountValue + newDepositValue;
    depositField.innerText = newDdepositTotal;
}
