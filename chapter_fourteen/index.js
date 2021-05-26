function extend(parent, child) {
    child.prototype = Object.create(parent.prototype)
    // reset constructor
    child.prototype.constructor = child
}

function Shape(color){
    this.color = color

}

Shape.prototype.common = function() {
    console.log('I am common function')
}

// inherite Shape function
function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function() {
    console.log('I am drawing')
}

var sqr1 = new Square(50, 'green')
sqr1.common()

// inherite Shape function
function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

var circle1 = new Circle(20, 'red')
circle1.common()