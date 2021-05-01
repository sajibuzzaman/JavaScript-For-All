// Basic Object

// // **Pattern**
// var obj = {}
// console.log(typeof obj)

// // **Literal**
// var obj1 = {
//     x:10,
//     y:20
// }
// obj1.z = 30

// console.log(obj1)
// console.log(obj1.x)

// // **Constructor**
// var obj2 = Object()
// obj2.y = 20
// console.log(obj2)

// var obj3 = new Object()
// obj3.x = 10
// console.log(obj3)

// **Accessing object properties**
var point={
    x:10,
    y:20,
    z:30
}

// // **Dot Notation**
// console.log(point.x)
// console.log(point.x + point.z)

// // **Bracket Notation**
// console.log(point['x'])
// console.log(point['x'] + point['y'])

// var sum = 'y'
// console.log(point[sum])

// **Update Properties**
point.x = 45
console.log(point)

point['y'] = 55
console.log(point)

var prop = 'z'
point[prop] = 65
console.log(point)

// **Delete Properties**
delete point.x
console.log(point)