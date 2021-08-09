var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkBtn = document.querySelector("#check-btn");
var errMsg = document.querySelector("#error-message");
var notesNo = document.querySelectorAll(".notes-no");
var cashDiv = document.querySelector(".cash");
var outputReturn = document.querySelector(".output-return");
var nextBtn = document.querySelector("#next-btn");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener("click", function nextButtonHandler() {
    hideMsg();
    if (Number(billAmount.value) > 0) {
        nextBtn.style.display = "none";
        showCash();
    } else {
        showMessage("Invalid number. Please enter correct value.");
    }

});
checkBtn.addEventListener("click", function billCheckHandler() {
    hideMsg();



    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            showChangeReturn();
            const changeMoney = cashGiven.value - billAmount.value;
            calculateChange(changeMoney);
        } else {
            showMessage("Bill Amount should be less than Cash Given");
            return;
        }

    } else {
        showMessage("Invalid number. Please enter correct value.");
    }

});

function calculateChange(changeMoney) {
    for (let i = 0; i < availableNotes.length; i++) {
        var showNote = Math.trunc(changeMoney / availableNotes[i]);
        changeMoney = changeMoney % availableNotes[i];
        notesNo[i].innerText = showNote;
    }
}

function hideMsg() {
    errMsg.style.display = "none";
}

function showCash() {
    cashDiv.style.display = "block";
}

function showChangeReturn() {
    outputReturn.style.display = "block";
}

function showMessage(msg) {
    errMsg.style.display = "block";
    errMsg.innerText = msg;
    outputReturn.style.display = "none";
}