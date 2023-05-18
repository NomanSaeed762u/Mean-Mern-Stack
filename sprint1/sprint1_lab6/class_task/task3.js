class rectengular{
    constructor(width,heigth){
        this.width=width
        this.heigth=heigth
    }
    area(){

        console.log((this.width*this.heigth))
    }
    // *parameter(){
    //     yield this.width;
    //     yield this.heigth
    // }

}

const rectengular1=new rectengular(10,10)
rectengular1.area()
//console.log([...rectengular1.parameter()])
