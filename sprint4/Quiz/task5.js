
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    Get_Car_Data() {
      return (`The Maker is: ${this.make}, The Model is: ${this.model}, Year: ${this.year}`);
    }
  }
  
  let myCar = new Car("Toyota", "Any Model", 2023);
  console.log(myCar.Get_Car_Data()); 