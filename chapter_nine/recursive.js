function sayHi(n){
    if( n === 0 ){
        return
    }
    console.log('I am call ' + n)
    sayHi(n-1)
}
sayHi(5)


function sum(n) {
    if(n === 1){
        return 1
    }
    return n += sum(n-1)
}

console.log(sum(5))

function fact(n) {
    if(n === 1){
        return 1
    }
    return n *= fact(n-1)
}
console.log(fact(5))


var arr = [1, 2, 3, 4, 5]
function sumOfArr(arr, lastIndex) {
    if ( lastIndex === 0) {
        return 0
    }
    return arr[lastIndex] += sumOfArr(arr, lastIndex-1)
}
console.log(sumOfArr(arr, arr.length-1))