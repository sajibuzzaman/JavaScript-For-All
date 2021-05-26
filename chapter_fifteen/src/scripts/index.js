import '../styles/index.scss'

// //  |Template String
// var s = `   dsdwd
// awdad axax
// awfafdaes
//     sacasc AZXax
    
//     asdxascdas`

// console.log(s.trim())

var name = 'Sajib Uzzaman'
var age = 22

console.log( 'My name is ' + name + ' and I am ' + age + ' years old')
console.log(`My name is ${name} and I am ${age} years old. I am ${age > 18? '': 'not '}adult`)


// new method
console.log(name.padStart(15))
console.log(name.padStart(15, '*'))
console.log(name.padEnd(15, 'a'))
console.log('S'.repeat(10))