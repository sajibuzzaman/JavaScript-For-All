// Logical Operators
// && || !

var a = 200
var b = 300
var c = 40

// &&
if(a>b && a>c) {
    result = "a is maximum number"
} else if (b>a && b>c) {
    result = "b is maximum number"
} else {
    result = "c is maximum number"
}
console.log(result)

// ||
console.log(a>b || b>c)

// !
var result = !(a>b)
console.log(result)
