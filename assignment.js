// problem 1: feetToMile

function feetToMile(feet) {
    if (feet<0) {
        console.log('Sorry,', feet ,'is not a valid length.')
    }else{
        var mile = feet / 5280 ;
        return mile;
    }
}
/* test result */
var result = feetToMile(3129874);
console.log(result);
/* __________________________________________ */



// problem 2: woodCalculator

function woodCalculator(chair,table,bed) {
    if(chair >= 0 && table >= 0 && bed >= 0){
        var woodForChair = 1 * chair;
        var woodForTable = 3 * table;
        var woodForBed = 5 * bed;
        var totalWood = woodForChair + woodForTable + woodForBed;
        return totalWood;
    }else{
        console.log('negative number is not allowed...!')
    }
}
/* test result */
var result = woodCalculator(14,5,12);
console.log(result);
/* __________________________________________ */



// problem 3: brickCalculator

function brickCalculator(floors) {
    if(floors <= 0){
        console.log('negative floors is not allowed...!')
    }else{
        if (floors <= 10) {
            var height = 15 * floors;
            var bricks = 1000 * height;
            return bricks;
        }
        else if(floors <= 20){
            var firstTenFloors = 15 *10;
            var remainingFloors = floors - 10;
            var secondTenFloors = 12 * remainingFloors;
            height = firstTenFloors + secondTenFloors;
            bricks = 1000 * height;
            return bricks;
        }
        else if(floors > 20){
            firstTenFloors = 15 *10;
            secondTenFloors = 12 * 10;
            remainingFloors = floors - 20;
            var restFloors = 10 * remainingFloors;
            height = firstTenFloors + secondTenFloors + restFloors;
            bricks = 1000 * height;
            return bricks;
        }
    }
}

/* test result */
var result = brickCalculator(27)
console.log(result);
/* __________________________________________ */



// problem 4: tinyFriend

function tinyFriend(friends) {
    if (friends.length <= 0) {
        console.log('please enter a valid Name Group');
    }else{
        var tinyName = friends[0];

        for (var i = 0; i < friends.length; i++) {
            var name = friends[i];
            if (name.length < tinyName.length) {
                tinyName = name;
            }       
        }
    return tinyName;
    }
}
/* test result */
var friends = ['Tanzir Tuhin','Ibrahim Komol','Rumman','Ershad Zaman','Polash Noor','Jamshed Chowdhury']
var result = tinyFriend(friends);
console.log(result);
/* __________________________________________ */