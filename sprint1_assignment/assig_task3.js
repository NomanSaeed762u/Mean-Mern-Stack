function combineAndSortArraysDescending(array1, array2, array3) {
    //console.log(...arrays[1])
    array1=array1.sort((a, b) => b - a);
    array2=array2.sort((a, b) => b - a);
    array3=array3.sort((a, b) => b - a);
    const array4=[...array1,...array2,...array3];
    return array4;
  }
  
  const array1 = [5, 3, 8, 4];
  const array2 = [10, 6, 7, 2];
  const array3 = [1, 9];
  
  const combinedAndSortedArray = combineAndSortArraysDescending(array1, array2, array3);
  
  console.log(combinedAndSortedArray);