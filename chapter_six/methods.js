var arr = [1, 2, 5, 8, 9]
var arr2 = [3, 5, 7, 6, 4]

// // join method
// console.log(arr.join(' | '))

// // fill method
// arr.fill(0)
// console.log(arr)

// // concat method
// var arr3 = arr.concat(arr2)
// console.log(arr3)

// // isArray method for chech is it array or not
// console.log(Array.isArray(arr))

//  from array for copy a array but if it change any data its not effect previous array
var arr4 = Array.from(arr)
console.log(arr4)

//  from array for copy a array but if it change any data its effect previous array
var arr5 = arr
console.log(arr5)