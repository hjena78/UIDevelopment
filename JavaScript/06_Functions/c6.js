//functions
function f1(){
    console.log("function f1")
}
f1()

//passing function to variable
function f2(){
    return "function fn2"
}

f = f2console.log(f2())

//arrow function
f3 = () =>{console.log("Arrow Function")}
console.log(typeof(f3)) //function
f3()