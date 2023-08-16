
function callingValue (inputValue){
    const inputFiled = document.getElementById(inputValue);
    const inputFiledString = inputFiled.value;
    const inputFiledAmont = parseFloat(inputFiledString);
    inputFiled.value = '';
    return inputFiledAmont;
}
// text value ---------------
function callingText (inputText){
    const depositDisplay = document.getElementById(inputText);
    const depositDisplayString = depositDisplay.innerText;
    const depositDisplayAmont = parseFloat(depositDisplayString);
    return depositDisplayAmont;
}

// setdisplay _______________________
function setDisplay(displayValue, newValue){
    const textValue = document.getElementById(displayValue);
    textValue.innerText = newValue;
}