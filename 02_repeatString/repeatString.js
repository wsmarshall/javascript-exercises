const repeatString = function(inputString, numRepeats) {
    outputString = '';
    if(numRepeats >= 0){
        for (let i = 0; i < numRepeats; i++) {
            outputString += inputString;
        }
        return outputString;
    } else {
    return 'ERROR';
}
};

// Do not edit below this line
module.exports = repeatString;
