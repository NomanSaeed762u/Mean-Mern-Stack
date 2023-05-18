function checkEvenOdd(x){                  //function to check the evenodd
    if (x%2==0){                           //the condition will check if the denominator is zerro 
        return (x,"The number is even")
    } 
    else {                                 //if not above condition is false then this will run
        return (x,"The Number is odd")
    }
}
var a= 9;
console.log(checkEvenOdd(a));               //function call and pass argument