var arr = [6, 1, 2, 7, 3, 4, 5]

var result = arr.find(function(value) {
    return value === 7
})
console.log(result)

var result2 = arr.findIndex(function(value) {
    return value === 7
})
console.log(result2)



// **How its work in backend**
function find(arr, cb) {
    for(var i=0; i<arr.length; i++) {
        if(cb(arr[i])) {
            return arr[i]
        }
    }
}

function findIndex(arr, cb) {
    for(var i=0; i<arr.length; i++) {
        if(cb(arr[i])) {
            return i
        }
    }
}

var result3 = find(arr, function(value){
    return value === 4
})
console.log(result3)

var result4 = findIndex(arr, function(value){
    return value === 4
})
console.log(result4)