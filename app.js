const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const denomination = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelector(".no-of-notes")

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash given should atleast be equal to the bill amount!!");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {

    for (let i = 0; i < denomination.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / denomination[i]);
        amountToBeReturned = amountToBeReturned % denomination[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}