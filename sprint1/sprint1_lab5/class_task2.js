function divideByZero(numerator, denominator) {
    try {
      if (denominator==0){
        throw new Error(" The denominator should not be zero !")
      }
    const result = numerator / denominator;
    console.log(result);
    } 
    
    catch (error) {
      console.error(error.message);
    }
  }
  divideByZero(10, 0);  