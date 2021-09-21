const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#cash-button");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");


checkButton.addEventListener("click", function validateCashAndBillAmount(){
    errormessage.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven >= billAmount) {
            const amountToBeReturned = cashGiven - billAmount;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash given should atleast be equal to the bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
})

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = error-message;
}



