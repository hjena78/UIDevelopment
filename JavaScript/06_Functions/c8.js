//Higher order functions
function f1(){
    console.log('outer function')
    return function(){
        console.log("inner function")
        
    }
}

f = f1()
f()


function f1(username){
    return function (password){
    console.log(username, password)
    }
}

f = f1("sai kiran")
f("admin1234")