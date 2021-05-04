// // ***Literal Object***

// var rect = {
//     // properties
//     width: 200,
//     height: 100,

//     // method
//     draw: function() {
//         console.log('I am a Rectangle')
//         this.printPropertie()
//         // console.log(this)    //its return react object properties
//     },

//     printPropertie: function(){
//         console.log('My Width is', this.width)
//         console.log('My Height is', this.height)
//     }
// }

// rect.draw()

// // rect.height = 50
// // rect.draw()

// // ***this**
// function func() {
//     console.log(this)       // its return windows object
// }
// func()

// var test = {
//     // properties
//     width: 20,
//     height: 10,
//     print: rect.printPropertie
// }
// test.print()


// **factory pattern**
var createRect = function(width, height) {
    return {
        // properties
        width: width,
        height: height,

        // method
        draw: function() {
            console.log('I am a Rectangle')
            this.printPropertie()
        },
    
        printPropertie: function(){
            console.log('My Width is', this.width)
            console.log('My Height is', this.height)
        }
    }

}

var rect1 = createRect(20, 200)
var rect2 = createRect(40, 400)
var rect3 = createRect(50, 500)
rect1.draw()
rect2.draw()
rect3.draw()