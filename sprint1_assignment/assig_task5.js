function getPrimeNumbers(num){                 //pass perameter to function
    const array=[];                            // create an empty array
for(let i=1; i<=num; i++){                     // this for loop will run to the provided number
    let count =0                               // Count is zero
    if (num==1){                               //if the number is 1 then it will return the number and it should be prime
       return num
    }
    else{                                     //else check all the prime number to that number
        for (let j=1;j<=i; j++){              //this loop will till the i element
            if(i%j==0){                       //
                count+=1
            }
            
        }
        //console.log(count)
        if (count<=2){
            array.push(i)
        }
    }

}
return array
}

num=5
console.log(getPrimeNumbers(num))