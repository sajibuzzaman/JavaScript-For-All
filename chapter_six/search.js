var arr = [1, 2, 8, 7, 9, 5, 6]

var find = 60
var isFound = false

for(var i=0; i<arr.length; i++) {
    if(arr[i] === find){
        console.log('Data is found and index is ' + i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log('Data is not Found')
}