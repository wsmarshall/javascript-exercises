const removeFromArray = function(inputArray) {
    outputArray = inputArray;
    for (let j = 0; j < (arguments.length); j++){
        for (let i = 0; i < inputArray.length; i++) {
            if (typeof outputArray[i] == typeof arguments[j]){
                if (outputArray[i] == arguments[j]) {
                    outputArray.splice(i,1);
                }
            }
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
