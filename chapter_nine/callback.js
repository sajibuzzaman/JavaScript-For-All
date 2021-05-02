function sample(a, b, cb) {
    var c = a+b
    var d = a-b
    var result = cb(c, d)
    return result
}

function sum(a, b) {
    return a+b
}
console.log(sample(2, 5, sum))

var result = sample(2, 5, function(c, d){
    return c-d
})
console.log(result)

var result2 = sample(2, 5, function(c, d){
    return c*d
})
console.log(result2)