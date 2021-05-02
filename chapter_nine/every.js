var arr = [2, 4, 8, 9, 6, 0, 3, 1, 2, 4, 7, 6, 9]

var res = arr.every(function(value){
    return value%2 === 0
})
console.log(res)

var res2 = arr.every(function(value){
    return value >= 0
})
console.log(res2)

var res3 = arr.every(function(value){
    return value < 0
})
console.log(res3)