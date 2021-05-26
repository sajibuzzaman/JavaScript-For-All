// // ***Inheritance***

// function person(name) {
//     this.name = name
// }
//  var p1 = new person('Sajib Uzzaman')
//  console.log(p1)


// var person = {
//     name: 'Sajib Uzzaman'
// }

// // console.log(person)

// // for(var i in person) {
// //     console.log(i)
// // }

// // console.log(Object.keys(person))

// // var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// // console.log(descriptor)

// // let baseObject = Object.getPrototypeOf(person, 'name')
// // let descriptor = Object.getOwnPropertyDescriptor(baseObject, 'toString')
// // console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'Sajib',
// })

// // ***Constructor Prototype**
// function Person(name) {
//     this.name = name
// }

// Person.prototype.PI = 3.12

// var p1 = new Person('Sajib Uzzaman')
// var p2 = new Person('Maisha')

// // console.log(Object.getPrototypeOf(p1))
// // console.log(Person.prototype)

// console.log(p1)
// console.log(p2)


// ***Instance and Prototype Member***
function Square(width) {
    // Instance member
    this.width = width
    this.getWidth = function(){
        console.log( 'Width is ' + this.width)
    }
}

Square.prototype = {
    // prototype member
    draw: function() {
        this.getWidth()
        console.log('Draw')
    },
    // override toString method
    toString: function() {
        return 'My width is ' + this.width
    }
}

var sqr1 = new Square(20)
var sqr2 = new Square(30)

// console.log(sqr1)
// console.log(sqr2)
// console.log(sqr1.draw())
// console.log(sqr2.draw())
console.log(sqr1.draw())
console.log(sqr2.toString())

// for instance property
console.log(Object.keys(sqr1))

// for instance and prototype property
for(var i in sqr1) {
    console.log(i)
}

// Check own property
console.log(sqr1.hasOwnProperty('width'))
console.log(sqr1.hasOwnProperty('getWidth'))
console.log(sqr1.hasOwnProperty('draw'))
console.log(sqr1.hasOwnProperty('toString'))