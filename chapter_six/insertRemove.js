var arr = [2, 4, 6, 7, 9, 15]

// insert 3 to index 2 without any data emove

// arr[2] = 3           //failed
// arr.push(3)          //failde
// arr.unshift(3)       //failed
// arr.splice(2, 0, 3)     //pass

// remove data
// arr[1] = undefined
// arr.pop()
// arr.shift()
// arr.splice(1, 1)

// replace data by splice
arr.splice(1, 1, 44)


console.log(arr)