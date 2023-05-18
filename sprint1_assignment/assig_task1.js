function SortArrayByLength(array){                        //pass array parameter to function.

    /*
    the following are nested loop in which each element of the array will iterate over all pairs 
    of elements in the input array array. and will compare the length of the strings at each pair 
    of indices and swap the positions of the elements if the string at the later index is longer
    than the string at the earlier index. Thw swapping will continue with each pairs of elements 
    until iterated over all possible pairs. Now the resultant array will sorted by length from longest
     to shortest.
    */
    for (let i = 0; i < array.length - 1; i++) {          //This loop will run till the length-1 of array
        for (let j = i + 1; j < array.length; j++) {      //this loop start from 1 and will run to length of array
          if (array[j].length > array[i].length) {        // this condition will check if the earlier element if less then nex index
            const temp = array[i];                        // this will store temparary value of earlier index
            array[i] = array[j];                          //assign next value to previous value
            array[j] = temp;                              // previous value to next value
          }
        }
      }
      return array;
    }
   // return array

const array=['i','hope','thatyou','will','be','doing','wellnd']

console.log(SortArrayByLength(array))                   //call function and pass argument of array
