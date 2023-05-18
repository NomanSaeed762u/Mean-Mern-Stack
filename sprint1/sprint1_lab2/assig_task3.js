const num =3;
var count=0;
for (var i=1; i<=num; i++){  // loop till the given number
    if (num%i==0){           // if the number is divided then add 1 to count
        count=count+1;
    }
}

if (count>=3){               //if counter is equal or greater then 2 it would be prime
    console.log("The number is not prime number: ")
}
else{                       //otherwise it wouldnt be prime
    console.log("The number is prime:")
}
console.log()