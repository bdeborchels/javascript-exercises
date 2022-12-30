const sumAll = function(min, max) {

    var sum = 0;

    if((min < 0 || max <0) || !Number.isInteger(min) || !Number.isInteger(max)){
        return 'ERROR'
    }

    if(min>max){
        for(let i=min; i>=max; i--){
            sum = sum + i;
        }
        return sum;
    }
    for(let i=min; i<=max; i++){
        sum = sum + i;
    }
    return sum;
};

sumAll(1,4);
sumAll(1, 4000);
sumAll(-10, 4);
sumAll(10, [90, 1]);
sumAll(10, "90");
sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
