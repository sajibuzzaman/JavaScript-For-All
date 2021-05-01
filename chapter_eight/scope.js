var a = 'abc'

function x() {
    // a= 30
    function y() {
        a = 20
        console.log('Y:', a)
    }
    console.log('X:', a)
    y()
}

x()
// console.log(a)