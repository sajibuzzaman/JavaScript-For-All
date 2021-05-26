function Shape(){

}

Shape.prototype.common = function() {
    console.log('I am common function')
}

// inherite Shape function
function Square(width) {
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function() {
    console.log('I am drawing')
}

var sqr1 = new Square(50)
sqr1.common()

// // inherite Shape function
// function Circle() {
//     console.log('I am Circle')
// }

// Circle.prototype = Object.create(Shape.prototype)

// var circle1 = new Circle()
// circle1.common()