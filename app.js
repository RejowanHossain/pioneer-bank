// login button event handler
const loginBtn = document.getElementById("login");
const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");

loginBtn.addEventListener("click", function () {
    loginArea.style.display = "none";
    transactionArea.style.display = "block"
})

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);

    // balance event handler
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

// withdraw button event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber)
    document.getElementById("withdrawAmount").value = "";
})


function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;

}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}