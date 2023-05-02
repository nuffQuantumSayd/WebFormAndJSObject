window.onload = function(){
    
}
    //make a method to validate letters
        //if invalid we need to show a message in the errors-div
        //use isValidString()

    //make a method to validate numbers
        //if invalid we need to show a message in the errors-div
        //use isValidNumber()

    //make a method to validate dates
        //if invalid we need to show a message in the errors-div



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
    if(inputBoxValue.trim() == ""){
        validString = false;
        errorMessage("You must enter a valid name", "#errors-div");
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
        errorMessage("You must enter a valid price", "#errors-div");
        return false;
    }
    //if the value isNan return false
    else if(isNaN(parseFloat(inputBoxValue))){
        errorMessage("You must enter a valid price", "#errors-div");
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