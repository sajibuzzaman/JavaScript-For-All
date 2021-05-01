// this code open by chrome developer tools
var a = 20

function test(){
    var x = 30
    return function(){
        console.log(x)
    }
}

var abc = test()
console.dir(abc)