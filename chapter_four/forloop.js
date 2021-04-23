sum = 2
for(var i=4; i<=100; i+=2) {
        console.log(sum + '+' + i + '=' + (sum+i))
        sum += i
}
console.log('Result = ' + sum)