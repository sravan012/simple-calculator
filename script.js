let resultField = document.getElementById('result');

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += operator;
}

function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function clearResult() {
    resultField.value = '';
}
