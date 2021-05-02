// normal process
function add(a, b, c) {
    return a+b+c
}
console.log(add(5, 15, 10))

// currying process
function currying(a){
    return function(b) {
        return function(c) {
            return a+b+c
        }
    }
}
var result = currying(5)(15)(10)
console.log('Currying Result =', result)