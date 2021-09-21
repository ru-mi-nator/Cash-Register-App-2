const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#cash-button");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const denomination = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelector(".noOfNotes")

checkButton.addEventListener("click", function validateCashAndBillAmount(){
    hideMessage();
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

function hideMessage() {
    errormessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = error-message;
}

function calculateChange(amountToBeReturned){
    for (let i = 0; i < denomination.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / calculateChange[i]);
        amountToBeReturned = amountToBeReturned % calculateChange[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

