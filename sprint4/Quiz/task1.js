function ArraySum(array){
    count=0
    for(let i=0; i<array.length; i++){
        count=count+array[i];
    }
    return count;
}

const array=[1,2,3,4,5,6,7,8,9]
console.log("The sum of array is: ",ArraySum(array))