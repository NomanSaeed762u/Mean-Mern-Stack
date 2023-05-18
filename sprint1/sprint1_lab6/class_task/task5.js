class ArrayManipulator{
    constructor(array,count){
        this.array=array;
        this.count=count
    }
    sum(){
        
        for (var i=0;i<this.array.length; i++){
            this.count+=this.array[i]

        }
        return this.count
    }
}
let array=[1,2,3,4,5,6,7,8,9,10]
const ArrayManipulator1=new ArrayManipulator(array,0)
console.log(ArrayManipulator1.sum())