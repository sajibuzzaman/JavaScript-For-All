var a = 'I am'
var b = 'Sajib Uzzaman'

var c = a.concat(' ', b)
// console.log(c)

var d = c.substr(5, 5)
// console.log(d)
// console.log(c.charAt(11))

// console.log(c.startsWith('I'))
// console.log(c.endsWith('Uzzaman'))
// console.log(c.toUpperCase())
// console.log(c.toLowerCase())
// console.log('   sajib uzzaman  '.trim())
// console.log(c.split(' '))

var len = 0
while(true) {
    if (c.charAt(len) == '') {
        break
    } else {
        len++
    }
}
console.log(len)

// shortcut way
console.log(c.length) 