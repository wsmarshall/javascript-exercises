const reverseString = function(inputString) {
    outputString = '';
    for(let i = inputString.length; i >= 0; i--){
        outputString += inputString.charAt(i);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
