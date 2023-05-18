function moreVowelThenConants(array){                 //pass the array perameter to function 
    let result_Arr = [];                              // take an empty array to store the resultant array

    for (let i = 0; i < array.length; i++) {          // for loop will run till the length of array
      const str = array[i];                           //store the current element to str
      let vowel = 0;                                  //took the vowel and consonant counter and assign 0
      let consonant = 0;
  
      for (let j = 0; j < str.length; j++) {          // this for loop is running to the length of the each element
        
        /*
          the following code will compare each vowel element with the each char of element. if the 
          element char is equal to vowel then the vowel counter will increse by 1 otherwise the 
          consonant will increase by 1
        */
        if (/[aeiou]/.test(str[j])) {              //this line is like ('a','e','i','o','u') ==str[j]   
          vowel=vowel+1;
        } 
        else{
          consonant=consonant+1;

        }
      }

      if (vowel > consonant) {                  //if number of the vowel is more than the consonant
        result_Arr.push(str);                   // the current element will add to result_arr
      }
    }
  
    return result_Arr;
}


const array=['i','hope','thatyou','bananaa','abe','doing','wellnd']

console.log(moreVowelThenConants(array))                   //call function and pass argument of array