class Vehicle{
    constructor(year, make, made){
        this.make=make,
        this.made=made,
        this.year=year
    }
    start(){
        return ("The Vehicle is start by!")
    }
}
class Car extends Vehicle{
    constructor(year, make,made,numDoors){
        super(year,make, made)
        this.numDoors=numDoors
    }
    drive(){
        return this.start() + `, ${this.year}, ${this.make}, ${this.made}, with number if door is: ${this.numDoors}`
    }
}
class Motercycle extends Vehicle{
    constructor(year,make,made){
        super(year, make,made)
    }
    drive(){
        return this.start() + `, ${this.year}, ${this.make}, ${this.made}`
    }
}

let car=new Car(2021,"Toyota","Corolla",4)
console.log(car.drive())