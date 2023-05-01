function main():void{
    //make a method to validate letters
        //if invalid we need to show a message in the errors-div
        //use isValidString()

    //make a method to validate numbers
        //if invalid we need to show a message in the errors-div

    //make a method to validate dates
        //if invalid we need to show a message in the errors-div
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
    if(inputBoxValue.trim() == ""){
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
    let isValidNumber = true;
    let inputBox = <HTMLInputElement>getEle(id);
    let inputBoxValue = inputBox.value;

    //if the value is empty return false
    if(inputBoxValue.trim() == ""){
        return false;
    }
    //if the value isNan return false
    if(isNaN(parseFloat(inputBoxValue))){
        return false;
    }
    return isValidNumber;
}


/**
 * 
 * @param id of the target element
 * @returns the target element
 */
function getEle(id:string){
    return document.getElementById(id);
}