let display = document.getElementById("display");

function appendValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {
        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }
        display.value = result;
    }

    catch (error) {
        display.value = "Error";
    }
}