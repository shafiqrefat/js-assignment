function feetToMile(feet){
    if(feet<=0){
        console.log("You are entered invalid number , please check  your number is bigger than 0");       
    }
    else{
        var result = feet * 0.000189394;
    }
    return result;
}
var calculateMile = feetToMile(5280);
console.log(calculateMile);


function woodCalculator( chair , table , bed ){
    var calculateChair = 1 * chair;
    var calculateTable = 3 * table;
    var calculateBed = 5 * bed;
    var totalCalculation = calculateChair + calculateTable + calculateBed ;
    return totalCalculation;
}
var result = woodCalculator( 3 , 5 , 7);
console.log(result);


function brickCalculator (floor){
    const feetEqualsBrick = 1000;
    if(floor>=1 && floor<=10){
            const result = 15 * feetEqualsBrick;
            return result;
    }
    else if(floor>=11 && floor<=20){
            const result = 12 * feetEqualsBrick;
            return result;
    }
    else if(floor>=21){
            const result = 10 * feetEqualsBrick;
            return result;
    }
    else(floor = 0);{
        console.log("You are entered wrong floor number.");
    }
}
const totalBrick = brickCalculator(21);
console.log(totalBrick);


function tinyFriend(friends){
    var minimum = friends [0];
    for(var i = 1; i <friends.length;i++){
        var element = friends[i];
        if(element.length<minimum.length){
            minimum = element;
        }
    }
    return minimum;
}
var result = tinyFriend(['Abir','Farhan','Joy','Dishan','Shafiqur']);
console.log(result);