function main() {
}
function isValidString(id) {
    var validString = true;
    var inputBox = getEle(id);
    var inputBoxValue = inputBox.value;
    if (inputBoxValue.trim() == "") {
        validString = false;
    }
    return validString;
}
function isValidNumber(id) {
    var isValidNumber = true;
    var inputBox = getEle(id);
    var inputBoxValue = inputBox.value;
    if (inputBoxValue.trim() == "") {
        return false;
    }
    if (isNaN(parseFloat(inputBoxValue))) {
        return false;
    }
    return isValidNumber;
}
function getEle(id) {
    return document.getElementById(id);
}
