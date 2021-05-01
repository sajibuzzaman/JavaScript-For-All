// 1. It returns the same result if given the same arguments
// 2. It does not cause any observable side effect


// it is pure function because its return same result if given same argumenst and its have no side effect
function sqr(n) {
    return n*n
}

console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))