function test(greet, name) {
    function getFirstName() {
        if(name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}

test('Good Morning', 'Sajib Uzzaman')