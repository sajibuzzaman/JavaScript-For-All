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


// // **factory pattern**
// var createRect = function(width, height) {
//     return {
//         // properties
//         width: width,
//         height: height,

//         // method
//         draw: function() {
//             console.log('I am a Rectangle')
//             this.printPropertie()
//         },
    
//         printPropertie: function(){
//             console.log('My Width is', this.width)
//             console.log('My Height is', this.height)
//         }
//     }

// }

// var rect1 = createRect(20, 200)
// var rect2 = createRect(40, 400)
// var rect3 = createRect(50, 500)
// rect1.draw()
// rect2.draw()
// rect3.draw()


// // ***Constructor Pattern***
// var Rectangle = function(width, height) {
//      // properties
//      this.width = width
//      this.height = height

//      // method
//      this.draw = function() {
//          console.log('I am a Rectangle')
//          this.printPropertie()
//      }
 
//      this.printPropertie = function(){
//          console.log('My Width is', this.width)
//          console.log('My Height is', this.height)
//      }
// }

// // var rect1 = new Rectangle(5, 8)
// // rect1.draw()

// // ***new how its work**
// function myNew(constructor) {
//     var obj ={}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))

//     return obj
// }

// var rect1 = myNew(Rectangle, 20, 50)
// rect1.draw()

// // ***Function is a object proved**
// var Rect = new Function('width', 'height', `this.width = width
//     this.height = height

//     // method
//     this.draw = function() {
//         console.log('I am a Rectangle')
//         this.printPropertie()
//     }

//     this.printPropertie = function(){
//         console.log('My Width is', this.width)
//         console.log('My Height is', this.height)
//     }`
// )

// var rect1 = new Rect(5, 6)
// rect1.draw()


// // ***Bind Call Apply***
// function test(c, d){
//     console.log(this.a + this.b + c + d)
// }

// test.call({a: 2, b: 3}, 2, 3)
// test.apply({a: 2, b: 3}, [2, 3])
// // bind
// test.bind({a: 2, b: 3}, 2, 3)()

// var testBind = test.bind({a: 2, b: 3}, 2, 3)
// testBind()

// var testBind = test.bind({a: 2, b: 3})
// testBind(2, 3)


// // ***Pass by value vs Pass by refrence**
// // ***Call by value vs Call by refrence**
// var n = 10

// function test(n) {
//     n = n+100
//     console.log(n)
// }

// test(n)
// console.log(n)   //its not change value of n and its pass by value

// var obj = {
//     a: 10,
//     b: 20
// }

// function test1(obj) {
//     obj.a = obj.a+100
//     obj.b = obj.b+100
//     console.log(obj.a, obj.b)
// }
// test1(obj)
// console.log(obj)  //its change value of obj so it is mutable object and its pass by refrence


// ***Abstraction( Hidden unnecessary things)***
var Rectangle = function(width, height) {
    this.width = width
    this.height = height
    // Abstarct position and printProperties
    var position = {
        x: 45,
        y: -45 
    }

    var printProperties = function() {
        console.log('My width is', this.width)
        console.log('My height is', this.height)
    }.bind(this)

    // this.getPositon = function() {
    //     return position
    // }

    this.draw = function() {
        console.log('I am a Rectangle')
        printProperties()
        console.log('X position = ' + position.x + ', ' + 'Y postion = ' + position.y)
    }
    // **Getter and Setter**
    Object.defineProperty(this, 'position', {
        get: function() {
            return position
        },
        set: function(value) {
            position = value
        }
    })
}

var rect = new Rectangle(20, 30)
rect.draw()

// console.log(rect.getPositon())
// **call by getter and setter**
console.log(rect.position)
rect.position = {
    x: 8,
    y: -8
}
console.log(rect.position)