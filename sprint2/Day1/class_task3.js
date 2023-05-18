class Animal{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    eat(){
        return "this eat the meat of "
    }
}
class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age)
        this.breed=breed
    }
    bark(){
        return `The ${this.breed}, Nmae ${this.name}, and ${this.age},Woof!`
    }
}


let Dog1=new Dog("GermanSheperd", "ironman",18)
console.log(Dog1.bark())