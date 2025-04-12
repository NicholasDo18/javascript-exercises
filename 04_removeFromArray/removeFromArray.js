const removeFromArray = function(array, number) {
    for (let i = 0; i< array.length;i++){
        if (array[i] == number){
            array.splice(i,1);
        }else{
            continue;
        }

    }
    return array;
};

removeFromArray([1,2,3,4],3);
// Do not edit below this line
module.exports = removeFromArray;
