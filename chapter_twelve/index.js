// ***Literal Object***

var rect = {
    // properties
    width: 200,
    height: 100,

    // method
    draw: function() {
        console.log('I am a Rectangle')
        this.printPropertie()
        // console.log(this)    //its return react object properties
    },

    printPropertie: function(){
        console.log('My Width is', this.width)
        console.log('My Height is', this.height)
    }
}

rect.draw()

// rect.height = 50
// rect.draw()

// ***this**
function func() {
    console.log(this)       // its return windows object
}
func()

var test = {
    // properties
    width: 20,
    height: 10,
    print: rect.printPropertie
}
test.print()


// **factory pattern**