function addAll(){
    sum = 0
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var result = addAll(2, 3)
console.log(result)

function person(name, email) {
    return {
        name: name,
        email:email
    }
}

var person1 = person('Sajib', 'sajib@gmail.com')
console.log(person1)