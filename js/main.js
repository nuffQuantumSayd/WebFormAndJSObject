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
    clearErrorDiv();
    if (isAllDataValid()) {
        var product = createProduct();
        displayProductInfo(product);
    }
}
function createProduct() {
    var product = new Product();
    product.name = getInput("form-name").value;
    var price = getInput("form-price").value;
    product.price = parseFloat(price);
    product.description = getInput("form-description").value;
    product.date = getInput("form-expiration-date").value;
    console.log(product);
    return product;
}
function clearErrorDiv() {
    var errorSummary = getEle("errors-div");
    errorSummary.innerText = "";
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
    if (!isValidString("form-expiration-date")) {
        errorMessage("Please choose an expiration date", "errors-div");
    }
    return validity;
}
function displayProductInfo(product) {
    var displayDiv = getEle("display");
    var productDisplayHeading = document.createElement("h2");
    productDisplayHeading.innerText = product.name;
    var productDisplayInfo = document.createElement("p");
    productDisplayInfo.innerText = "Price: ".concat(product.price, " Description: ").concat(product.description, " Expiration Date: ").concat(product.date);
    displayDiv.appendChild(productDisplayHeading);
    displayDiv.appendChild(productDisplayInfo);
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
function getInput(id) {
    return document.getElementById(id);
}
function errorMessage(errorMessage, element) {
    var errorDiv = getEle(element);
    var errorItem = document.createElement("p");
    errorItem.innerText = errorMessage;
    errorDiv.appendChild(errorItem);
}
