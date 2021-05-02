var arr = [1, 2, 3, 4, 5]

var sum = 0
arr.forEach(function(value, index, array){
    // console.log(value, index, array)
    sum += value
})
console.log(sum)



// **How its work in backend**
function forEach(arr, cb) {
    for(var i=0; i<arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

forEach(arr, function(value, index, array) {
    console.log(value, index, array)
})