window.onload = function(){
    let submitBtn = getEle("form-button");
    submitBtn.onclick = main;
}

class Product {
    name:string;
    price:number;
    description:string;
    date:Date;
}

function main(){
    //alert("button clicked")
    //make a method to validate letters
        //if invalid we need to show a message in the errors-div
        //use isValidString()

    //make a method to validate numbers
        //if invalid we need to show a message in the errors-div
        //use isValidNumber()

    //make a method to validate dates
        //if invalid we need to show a message in the errors-div
    
    //if isValidString and isValidNumber
        //display the class information
    if(isAllDataValid()){
        alert("all is valid");
    }
}

/**
 * 
 * @returns true if all the data is valid
 */
function isAllDataValid(){
    let validity = true;
    //name
        //errormessage
    if(!isValidString("form-name")){
        errorMessage("You must enter a valid name", "#errors-div");
        validity = false;
    }
    //price
        //errormessage
    if(!isValidNumber("form-price")){
        errorMessage("You must enter a valid price", "#errors-div");
        validity = false;
    }
    //description
        //errormessage
    if(isValidString("form-description")){
        errorMessage("Please enter a brief description", "#errors-div");
        validity = false;
    }
    
    return validity;
}

function displayProductInfo(){

}

/**
 * Returns true or false depending if the target elements value is a valid string
 * @param id the target html element 
 * @returns if the html input element is a valid string
 */
function isValidString(id:string):boolean{
    let validString:boolean = true;
    let inputBox = <HTMLInputElement>getEle(id);
    let inputBoxValue = inputBox.value;

    //if input is empty validString is false
    if(inputBoxValue == ""){
        validString = false;
    }
    return validString;
}

/**
 * Returns true or false depending if the target elements value is a valid number
 * @param id the target element id
 * @returns if the html input element is a valid number
 */
function isValidNumber(id:string):boolean{
    let validNumber = true;
    let inputBox = <HTMLInputElement>getEle(id);
    let inputBoxValue = inputBox.value;

    //if the value is empty return false
    if(inputBoxValue.trim() == ""){
        return false;
    }
    //if the value isNan return false
    else if(isNaN(parseFloat(inputBoxValue))){
        return false;
    }
    return validNumber;
}

//maybe use this idea later
// function isValidDate(id:string):boolean{
//     let validDate = true;
//     let inputBox = <HTMLInputElement>getEle(id);
//     let inputBoxValue = inputBox.value;

//     //use this regular expression to validate the date
//     //  ^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$
// }

/**
 * A shortcut for document.getElementById();
 * @param id of the target element
 * @returns the target element
 */
function getEle(id:string){
    return document.getElementById(id);
}

/**
 * creates an element then displays an error message
 * @param errorMessage the message you want to show
 * @param element the parent of the element you wish to target 
 */
function errorMessage(errorMessage:string, element:string){
    let errorList = <HTMLElement>document.createElement("p");
    errorList.innerText = errorMessage;
    getEle(element).appendChild(errorList);
}