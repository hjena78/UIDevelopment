//pure functions and impure functions
function f1(){
    const n = 5
    return n*n
}

console.log(()) //25

//impure functions
const n = 5
function f2(){
    return n*n
}

console.log(f2()) //25

//pure functions
function f3(username, pasword){
    if (username == "admin" && password == "admin"){
        console.log("login success")
    }else{
        console.log("login failure")
    }
}
f3("admin","admin")

//impure functions
function f4(username, password){
    username = "sai kiran"
    if(username =="admin" && password == "admin"){
        console.log("login success")
    }else{
        console.log("login failure")
    }
}