var isResult = true

while(isResult) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 10) {
        console.log('Winner Winner Chiken Dinner!')
        isResult = false
    } else {
        console.log('You got ' + rand)
    }
}