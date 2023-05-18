
function printpersonalinfo(obj){       //function to print personal info
    console.log(obj.Name);
    console.log(obj.City);
    console.log(obj.age)
}

const obj={                          //object with properties
    'Name': 'Ali',
    'City': 'Lahor',
    'age' : 30
}
printpersonalinfo(obj)              //pass the arg to the function