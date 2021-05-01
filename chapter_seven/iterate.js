var obj = {
    a:10,
    b:20,
    c:30
}

// console.log('a' in obj)
// console.log('e' in obj)

for(var i in  obj){
    console.log(i)
    console.log(i + ': ' + obj[i])
}