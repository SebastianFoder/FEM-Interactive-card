holderInput = document.querySelector("#holderInput");
numberInput = document.querySelector("#numberInput");
monthInput = document.querySelector("#monthInput");
yearInput = document.querySelector("#yearInput");
cvcInput = document.querySelector("#cvcInput");

numberDisplay = document.querySelector("#numbers");
holderDisplay = document.querySelector("#holder");
monthDisplay = document.querySelector("#month");
yearDisplay = document.querySelector("#year");
cvcDisplay = document.querySelector("#cvc");

confirmButton = document.querySelector("#confirmBtn");
inputForm = document.querySelector("#inputs");

holderInput.addEventListener("input", function () {
    holderDisplay.innerHTML = holderInput.value;
});

numberInput.addEventListener("input", function () {
    if (numberInput.value.replace(/\s/g, "").length <= 16) {
        let output = parseInt(numberInput.value.replace(/\s/g, ""));  
        if (!(output == null || isNaN(output))) {      
            output = output.toString().replace(/\d{4}(?=.)/g, '$& ');
        } else {
            output = 0;
        }
        numberDisplay.innerHTML = output;
        numberInput.value = output;
    } else{
        numberInput.value = numberDisplay.innerHTML;
    }
});

monthInput.addEventListener("input", function () {
    if (monthInput.value <= 12 && monthInput.value >= 0) {
        if (monthInput.value.length > 2) {
            monthInput.value = parseInt(monthInput.value.toString());
        }
        if (monthInput.value.length == 1) {
            monthInput.value = "0" + monthInput.value;
        }
        monthDisplay.innerHTML = monthInput.value;
    } else{
        monthInput.value = monthDisplay.innerHTML;
    }
});

yearInput.addEventListener("input", function () {
    if (yearInput.value <= 99 && yearInput.value >= 0) {
        if (yearInput.value.length > 2) {
            yearInput.value = parseInt(yearInput.value.toString());
        }
        if (yearInput.value.length == 1) {
            yearInput.value = "0" + yearInput.value;
        }
        yearDisplay.innerHTML = yearInput.value;
    } else{
        yearInput.value = yearDisplay.innerHTML;
    }
});

cvcInput.addEventListener("input", function () {
    if (cvcInput.value.length <= 4) {
        cvcDisplay.innerHTML = cvcInput.value;
    } else{
        cvcInput.value = cvcDisplay.innerHTML;
    }
});


confirmButton.addEventListener("click", function (event) {    
    event.preventDefault();
    // validate
    inputForm.classList.add("completed");
});
