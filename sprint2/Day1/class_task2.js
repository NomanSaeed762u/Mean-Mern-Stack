class Shape{
    constructor(width,height){
        this.width=width,
        this.height=height
    }
    area(){
        return this.width*this.height
    }
}
class Rectengle extends Shape{
    constructor(width, height,color){
        super(width,height)
        this.color=color
    }
    draw(){
        return `The rectengle has been draw with color: ${this.color}, and area :` +this.area()
    }
}


let rectengle=new Rectengle(10,10, "Black")
console.log(rectengle.draw())