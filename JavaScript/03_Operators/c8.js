var a = 10
var b = 10
c = (a++ != b || a++ !=b)
console.log(c) // true
console.log(a) // 12
console.log(b) // 10

var a = 10
var b = 20
var c = (a++ != b | a++ == 10) 
console.log(c) // 1
console.log(a) // 12
console.log(b) // 20
 