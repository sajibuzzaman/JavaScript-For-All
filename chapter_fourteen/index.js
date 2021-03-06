// function extend(parent, child) {
//     child.prototype = Object.create(parent.prototype)
//     // reset constructor
//     child.prototype.constructor = child
// }

// function Shape(color){
//     this.color = color

// }

// Shape.prototype.common = function() {
//     console.log('I am common function')
// }

// // inherite Shape function
// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }

// extend(Shape, Square)

// Square.prototype.draw = function() {
//     console.log('I am drawing')
// }

// // method overriding
// Square.prototype.common = function() {
//     // Shape.prototype.common.call(this)
//     console.log('I am calling from Square and I am overriden')
// }

// var sqr1 = new Square(50, 'green')
// // sqr1.common()

// // inherite Shape function
// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }

// extend(Shape, Circle)
// // method overriding
// Circle.prototype.common = function() {
//     // Shape.prototype.common.call(this)
//     console.log('I am calling from Circle and I am overriden')
// }

// var circle1 = new Circle(20, 'red')
// // circle1.common()

// var s = new Shape('Yellow')
// // s.common()

// var shapes = [s, circle1, sqr1]
// for(var i of shapes) {
//     i.common()
// }

// // find the parrents
// console.log(circle1 instanceof Circle)
// console.log(circle1 instanceof Shape)
// console.log(circle1 instanceof Square)
// console.log(sqr1 instanceof Circle)
// console.log(sqr1 instanceof Shape)
// console.log(sqr1 instanceof Square)

// ***Composition Mixin**
function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canEat ={
    eat: function() {
        console.log('Eating....')
    }
}

var canWalk ={
    walk: function() {
        console.log('Walking....')
    }
}

var canSwim ={
    swim: function() {
        console.log('Swimming....')
    }
}

// var person = Object.assign({}, canEat, canWalk)
// person.name = 'Sajib Uzzaman'

function Person(name) {
    this.name = name
}
// Object.assign(Person.prototype, canEat, canWalk)
mixin(Person.prototype, canEat, canWalk)

var p1 = new Person('Sajib Uzzaman')

function GoldFish(name) {
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)

var gf = new GoldFish('Love')