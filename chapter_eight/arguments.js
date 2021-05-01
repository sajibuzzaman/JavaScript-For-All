// function add(a, b) {
//     var result = a+b
//     console.log(result)
// }

// add(10, 20)
// add(10, 50)

// function sub(a, b) {
//     var result = a-b
//     console.log(result)
// }

// sub(100, 20)
// sub(10, 50)

// arr1 = [2, 5, 8]
// arr2 = [3, 6, 9]

// function sumofArray(arr) {
//     sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }

// sumofArray(arr1)
// sumofArray(arr2)

// function func(a, b, c){
//     console.log(arguments)
// }
// func(10, 20, 30)

// function test(a, b, c){
//     for(var i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// test(10, 20, 30)

function addAll(){
    sum = 0
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(2, 3)
addAll(2, 3, 5)
addAll(8, 30, 2, 10)