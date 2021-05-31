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

// let obj = {
//     name: 'Sajib Uzzaman',
//     print: function() {
//         setTimeout( () => {
//             console.log(`hello!! ${this.name}`)
//         }, 1000)
//     }
// }

// obj.print()


// ***Default Parameter***

// function sqr(a=1) {
//     console.log(a * a)
// }
// sqr()

// function greet(name='Sajib Uzzaman', msg='Hello') {
//     console.log(`${msg}! ${name}`)
// }
// greet()


// ***Custom Iterable Object***
// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function() {
//         let currentvalue = this.start
//         const self = this
//         return {
//             next() {
//                 return {
//                     done: currentvalue > self.end,
//                     value: currentvalue > self.end ? undefined : currentvalue++
//                 }
//             }
//         }
//     }
// }

// // for(let v of obj) {
// //     console.log(v)
// // }

// let iterator = obj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// ***Rest and Spread Operator
// function sum(...rest) {
//     return rest.reduce((a, b) => a+b)
// }

// let x = sum(1, 2, 3)
// console.log(x)

// let arr = [1, 2, 3]
// console.log(...arr)     // spread operator

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// let obj2 = {
//     ...obj
// }
// console.log(obj2)


// ***Enhance Object***

// let a = 10, b = 20

// let obj = {
//     a,      //a: a,
//     b,      //b: b,
//     print() {
//         console.log(this)
//     }
// }

// // console.log(obj)
// obj.print()


// ***Destructuring***
let person = {
    name: 'Sajib Uzzaman',
    email: 'sajib@gmail.com',
    address: {
        city: 'Dhaka',
        Country: 'Bangladesh'
    }
}

let {name, email, address, address : {city, Country}} = person

console.log(name, email, city, Country)

// array destruturing
let arr = [1, 2, 3, 4, 5]

let [first, second, , , last] = arr

console.log(first, second, last)