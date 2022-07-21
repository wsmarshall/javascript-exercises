const sumAll = function(num1, num2) {
    endRange = Math.max(num1, num2);
    startRange = Math.min(num1, num2);
    if ((typeof num1 == 'number') && (typeof num2 == 'number')) {
        if (num1 >= 0 && num2 >= 0){
            return ((endRange*(endRange+1)/2));
        }
    } 

    return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
