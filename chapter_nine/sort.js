var persons =[
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 21
    },
    {
        name: 'C',
        age: 28
    },
    {
        name: 'D',
        age: 18
    }
]

var arr = [2, 4, 8, 9, 6, 0, 3, 1, 2, 4, 7, 6, 9, -8, -6, -1]

// // **its not valid for nagetive value
// arr.sort()
// console.log(arr)

var res = arr.sort(function(a, b){
    if(a>b) {
        return 1
    }else if(a<b) {
        return -1
    }else {
        return 0
    }
})
console.log(res)

var res1 = arr.sort(function(a, b){
    if(a>b) {
        return -1
    }else if(a<b) {
        return 1
    }else {
        return 0
    }
})
console.log(res1)

var res3 = persons.sort(function(a, b){
    if(a.age>b.age) {
        return 1
    }else if(a.age<b.age) {
        return -1
    }else {
        return 0
    }
})
console.log(res3)