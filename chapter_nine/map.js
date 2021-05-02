var arr = [1, 2, 3, 4, 5]

var sqrArr = arr.map(function(value, index, array){
     return value*value
})
console.log(arr)
console.log(sqrArr)

// **How its work in backend**
function map(arr, cb) {
    var newArr = []
    for(var i=0; i<arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var qub = map(arr, function(value){
    return value* value* value
})

console.log(qub)