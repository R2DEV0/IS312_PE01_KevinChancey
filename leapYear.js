// Kevin Chancey PE01_IS312 //
// Leap Year Checker //

function leapYear(num){
    if(num % 4 == 0){
        if(num % 400 == 0){
            console.log("This is a leap year");
        }
        else if(num % 100 == 0){
            console.log("This is not a leap year");
        }
        else{
            console.log("This is a leap year");
        }
    }
    else{
        console.log("This is not a leap year")
    }
}
leapYear(2028);