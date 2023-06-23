//passing default values in the function
function f1(uname="sai", lname="kiran"){
    console.log(uname, lname);

}
f1()
f1('sai', 'kiran')
f1('sai', 'ram')

//passing key and value in the function
function f2(uname, lname){
    console.log(uname, lname);

}
f2(uname = "sai", lname = "kiran")
f2(uname = "sai", lname = "kumar")
f2(uname = "sai", lname = "ram")
f2(uname = "sai", lname = "krishna")