class Employee{
    constructor(name,positon,salary){
        this.name=name;
        this.positon=positon;
        this.salary=salary
    }
    get new(){
        this.name=this.name;
        this.positon=this.positon;
        this.salary=this.salary
    }
    set(x,y,z){
        this.name=x;
        this.positon=y;
        this.salary=z
    }
}

const Employee1= new Employee("basit","manager",2000)
Employee1.new
console.log(Employee1)
Employee1.set('ali','ceo',3000)
console.log(Employee1)