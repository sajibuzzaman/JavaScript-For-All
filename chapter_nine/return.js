// function greets(msg) {
//     function greetings(name){
//         return msg + ' ' + name + '!'
//     }
//     return greetings
// }

// var gm = greets('Good Morning')
// var gn = greets('Good Night')
// var hello = greets('Hello')

// var msg = gm('Sajib Uzzaman')
// var msg2 = gn('Sajib Uzzaman')
// var msg3 = hello('Sajib Uzzaman')
// console.log(msg)
// console.log(msg2)
// console.log(msg3)


function base(b) {
    return function(p) {
        var result = 1
        for(var i = 0; i<p; i++) {
            result *= b
        }
        return result
    }
}

var base3 = base(3)

console.log(base3(2))
console.log(base3(3))
console.log(base3(4))