function checkString(str) {
    if (typeof str !== "string") {
      throw new Error("Input is not a string");
    }
    console.log("The resultant string is :",str)
  }
try {
    checkString("hello")
    checkString("how")
    checkString(123)
}  catch(error){
    console.error(error.message);
}

 