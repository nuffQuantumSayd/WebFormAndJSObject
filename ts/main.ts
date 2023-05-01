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
 * 
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
 * 
 * @param id of the target element
 * @returns the target element
 */
function getEle(id:string){
    return document.getElementById(id);
}