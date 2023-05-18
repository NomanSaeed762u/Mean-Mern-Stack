class ArrayFilter{
    constructor(array){
        this.array=array;
        
    }
    greaterAge(){
        const result=this.array.filter((Object)=>{
            if(Object.age>=18){
                //console.log(Object)
                return Object
            }
        })
        return result
    }
}
let array=[
    data1={
    name: "basit",
    age : 20
},
data2={
    name: "ali",
    age : 15
},
data2={
    name: "khan",
    age : 30
}]
const ArrayFilter1=new ArrayFilter(array)
console.log(ArrayFilter1.greaterAge())