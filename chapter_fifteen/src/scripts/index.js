import '../styles/index.scss'

// // //  |Template String
// // var s = `   dsdwd
// // awdad axax
// // awfafdaes
// //     sacasc AZXax
    
// //     asdxascdas`

// // console.log(s.trim())

// var name = 'Sajib Uzzaman'
// var age = 22

// console.log( 'My name is ' + name + ' and I am ' + age + ' years old')
// console.log(`My name is ${name} and I am ${age} years old. I am ${age > 18? '': 'not '}adult`)


// // new method
// console.log(name.padStart(15))
// console.log(name.padStart(15, '*'))
// console.log(name.padEnd(15, 'a'))
// console.log('S'.repeat(10))

// ***let vs const vs var***

// let a = 10
// a = 100
// console.log(a)

// const b = 20
// // b = 200
// console.log(b)

// if (true) {
//     var a = 10
//     let b = 20
// }

// console.log(a)
// console.log(b)

// for (var i = 1; i<5; i++) {

// }
// console.log(i)

// for (let i = 1; i<5; i++) {

// }
// console.log(i)

// {
//     let iAmLet = 'I am let'
//     console.log(iAmLet)
// }
// // console.log(iAmLet)

// (function(){
//     var abc = 10
//     console.log(abc)
// })()
// // console.log(abc)

// ***Arrow Function***

// function add(a, b) {
//     return a + b
// }

// let add  = (a, b) => a + b
// console.log(add(5,6))

// let sqr = x => x * x
// console.log(sqr(5))

let obj = {
    name: 'Sajib Uzzaman',
    print: function() {
        setTimeout( () => {
            console.log(`hello!! ${this.name}`)
        }, 1000)
    }
}

obj.print()