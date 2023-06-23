//function with arguments
function f1(username, password){
    console.log(username, password);
}
f1("sai", "kiran")

//assing function with arguments
function f2(){
    
}

f = f2
console.log(f2("sai", "kiran"))

//arrow function with arguments
f3 = (username, password) => {
console.log(username, password)
}