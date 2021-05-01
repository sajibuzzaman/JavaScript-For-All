var add = function(a,b) {
    return a+ b
}

var result = add(10, 20)
console.log(result)

// setTimeout function for set time for output
setTimeout(function(){
    console.log('I will call after 5sec')
}, 5000)


var another = add
console.log(another(50,60))