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
// Get update main balance.........
function updateBalance(newDepositValue, isAddition) {
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceTextValue = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceTextValue);
    if (isAddition == true) {
        const totalBalanceAmount = totalBalanceValue + newDepositValue;
        totalBalance.innerText = totalBalanceAmount;
    }
    else {
        const totalBalanceAmount = totalBalanceValue - newDepositValue;
        totalBalance.innerText = totalBalanceAmount;
    }
}
document.getElementById("deposit-btn").addEventListener("click", function () {
    const newDepositValue = getInputValue("deposit-input");
    if (newDepositValue > 0) {
        const newDdepositTotal = depositWithdrawField("deposit-add", newDepositValue);
        updateBalance(newDepositValue, true);
    }
})
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawFieldAmount = getInputValue("withdraw-input");
    if (withdrawFieldAmount > 0) {
        depositWithdrawField("withdraw-amount", withdrawFieldAmount);
        updateBalance(withdrawFieldAmount, false);
    }
})
