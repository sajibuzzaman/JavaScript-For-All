// Literal Object

var rect = {
    // properties
    width: 200,
    height: 100,

    // method
    draw: function() {
        console.log('I am a Rectangle')
        console.log('My Width is', this.width)
        console.log('My Height is', this.height)
    }
}

rect.draw()

rect.height = 50
rect.draw()