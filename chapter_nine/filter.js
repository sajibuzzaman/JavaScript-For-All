var arr = [1, 2, 3, 4, 5]

var evenNum = arr.filter(function(value){
    return value%2 ===0
})
console.log(evenNum)

var oddNum = arr.filter(function(value){
    return value%2 === 1
})
console.log(oddNum)



// **How its work in backend**
function filter(arr, cb) {
    var newArr = []
    for(var i = 0; i<arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filter(arr, function(value){
    return value < 4
}))
console.log(filter(arr, function(value){
    return value%2 === 1
}))