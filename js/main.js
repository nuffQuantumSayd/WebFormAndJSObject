window.onload = function () {
};
function isValidString(id) {
    var validString = true;
    var inputBox = getEle(id);
    var inputBoxValue = inputBox.value;
    if (inputBoxValue.trim() == "") {
        validString = false;
        errorMessage("You must enter a valid name", "#errors-div");
    }
    return validString;
}
function isValidNumber(id) {
    var validNumber = true;
    var inputBox = getEle(id);
    var inputBoxValue = inputBox.value;
    if (inputBoxValue.trim() == "") {
        errorMessage("You must enter a valid price", "#errors-div");
        return false;
    }
    else if (isNaN(parseFloat(inputBoxValue))) {
        errorMessage("You must enter a valid price", "#errors-div");
        return false;
    }
    return validNumber;
}
function getEle(id) {
    return document.getElementById(id);
}
function errorMessage(errorMessage, element) {
    var errorList = document.createElement("p");
    errorList.innerText = errorMessage;
    getEle(element).appendChild(errorList);
}
