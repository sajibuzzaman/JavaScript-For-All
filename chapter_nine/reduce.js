var arr = [6, 1, 2, 7, 3, 4, 5]

var sum = arr.reduce(function(prev, curr, index, arr){
    return prev+curr
}, 0)
console.log(sum)

var max = arr.reduce(function(prev, curr, index, arr){
    return Math.max(prev, curr)
}, arr[0])
console.log(max)



// **How its work in backend**
function reduce(arr, cb, acc){
    for(var i = 0; i<arr.length; i++) {
        acc = cb(acc, arr[i], i, arr)
    }
    return acc
}

var sum2 = reduce(arr, function(prev, curr){
    return prev+curr
}, 0)
console.log(sum2)

var max2 = reduce(arr, function(prev, curr){
    return Math.max(prev, curr)
}, 0)
console.log(max2)

var min2 = reduce(arr, function(prev, curr){
    return Math.min(prev, curr)
}, arr[0])
console.log(min2)