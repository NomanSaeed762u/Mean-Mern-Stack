const array=[1,3,5,7,10,2,4]         //array of numbers
const result= array.find((item)=>{    //find function 
    if (item%2==0){                   //check if the number is even
        return item
    }
})
console.log(result)