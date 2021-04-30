var arr = [2, 5, 9, 10, 8, 7]

// print all array
for(var i=0; i< arr.length; i++) {
    console.log(arr[i])
}

// sum of all array number
sum = 0
for(var i=0; i<arr.length; i++) {
    sum += arr[i]
}
console.log('Sum = ' + sum)

// Update all array
for(var i=0; i< arr.length; i++) {
    arr[i] = arr[i] + 2
}
console.log(arr)

// find even number in array
var arr2 = []
var j =0
for(var i=0; i< arr.length; i++) {   
    if(arr[i] % 2 == 0){
        arr2[j] = arr[i]
        j++
    }
}
console.log(arr2)