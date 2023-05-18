class person{                                              //class with name of person
    constructor(name,age,gender){                          //constructor with differnt type of perameters
        this.name=name,
        this.age=age,
        this.gender=gender
    }
        greet(){                                           //method inside 
        return ("Hello,Hi!, Welcome to Peak Solution!");
    }
}

const person1=new person('Ali',18,'male')
console.log(person1)
console.log(person1.greet())