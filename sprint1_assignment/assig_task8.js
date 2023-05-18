function ConvertTovalidNumber(str){                             //pass parameter to function
    const result = parseInt(str);                               //Convert the string to number   
    if(isNaN(result)){                                          //check if the resultant value is still string
        throw new Error ("The String is not proper Number")     //if it is string it will throw this message
    }
    else{
        return ("The String is proper Number :");               //if it is number then it will throw this message
    }
    
}
const str="123"
/*
    if the rsultant value is number, then the try will run otherwise the 
    catch will run and will throw an only error message.
*/
try{
    console.log(ConvertTovalidNumber(str))                    //call a function and pass the arguments
    
}
catch(error){
     console.error(error.message)
}
