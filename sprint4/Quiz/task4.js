
  function greet_message(name) {
    const result=new Promise((res, rej) => {
      setTimeout(() => { res("Hello, " + name + 
      " Welcome to PeakSolution!");
    }, 2000);
    });
    return result
  }
  
  let name="Basit"
  greet_message(name)
    .then(message => console.log(message)); 
  
  