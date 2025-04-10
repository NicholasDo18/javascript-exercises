const repeatString = function(string, num) {
    let finalString = "";

    while(num>0){
        finalString +=string;

        num--;

    }
    return finalString;
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
