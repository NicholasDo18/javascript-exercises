const reverseString = function(str) {
    let splitString = str.split(""); //makes the string to an array.
    let reverseArray = splitString.reverse(); //reverses the order of the array.
    let reverseStr = reverseArray.join("");
    return reverseStr;

};

reverseString('hello there');
// Do not edit below this line
module.exports = reverseString;
