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