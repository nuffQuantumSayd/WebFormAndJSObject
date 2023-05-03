window.onload = function () {
    var submitBtn = getEle("form-button");
    submitBtn.onclick = main;
};
var Product = (function () {
    function Product() {
    }
    return Product;
}());
function main() {
    if (isAllDataValid()) {
        alert("all is valid");
    }
}
function isAllDataValid() {
    var validity = true;
    if (!isValidString("form-name")) {
        errorMessage("You must enter a valid name", "errors-div");
        validity = false;
    }
    if (!isValidNumber("form-price")) {
        errorMessage("You must enter a valid price", "errors-div");
        validity = false;
    }
    if (!isValidString("form-description")) {
        errorMessage("Please enter a brief description", "errors-div");
        validity = false;
    }
    return validity;
}
function displayProductInfo() {
}
function isValidString(id) {
    var validString = true;
    var inputBox = getEle(id);
    var inputBoxValue = inputBox.value;
    if (inputBoxValue == "") {
        validString = false;
    }
    return validString;
}
function isValidNumber(id) {
    var validNumber = true;
    var inputBox = getEle(id);
    var inputBoxValue = inputBox.value;
    if (inputBoxValue.trim() == "") {
        return false;
    }
    else if (isNaN(parseFloat(inputBoxValue))) {
        return false;
    }
    return validNumber;
}
function getEle(id) {
    return document.getElementById(id);
}
function errorMessage(errorMessage, element) {
    var errorDiv = getEle(element);
    var errorItem = document.createElement("p");
    errorItem.innerText = errorMessage;
    errorDiv.appendChild(errorItem);
}
