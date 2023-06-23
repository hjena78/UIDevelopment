//callback functions
function f1(username, password){
    console.log("username: " + username, "password: ")

}

function f2(username, password){
    uname = username
    pword = password
    f1(uname, password)
}

f2("sai kiran", "admin1234")
f2("sai kumar", "admin1234")
f2("sai krishna", "admin1234")