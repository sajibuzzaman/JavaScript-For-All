var obj = {
    a:10,
    b:20,
    c:30
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// // **for copy a object but if it change any data its effect previous object**
// var obj1 = obj
// obj1.a = 45
// console.log(obj)
// console.log(obj1)

// **for copy a object but if it change any data its not effect previous object**
var obj1 = Object.assign({}, obj)
obj1.a = 65
console.log(obj)
console.log(obj1)
