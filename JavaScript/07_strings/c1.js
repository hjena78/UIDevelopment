//string
//strings are sequence of characters
let s1 = "sai kiran"
console.log(s1)
console.log(typeof(s1))

console.log(s1(0))
console.log(s1(1))
console.log(s1(2))
console.log(s1(3))
console.log(s1(4))
console.log(s1(5))

console.log(s1.length)

//how many ways are there to create strings
let username = "sai kiran" //literal
//              012345678

//constructor
let uname = String("sai kiran")
console.log(username)

console.log(uname)

//charAt(index)
let user_name = "sai kiran"
console.log(user_name.charAt(4))
console.log(user_name.charAt(5))
console.log(user_name.charAt(12))

//concat()
//let fname = "sai"
//let lname = "kiran"
//console.log(fname + lname)
//console.log(fname.concat(lname))
//console.log(fname.concat("kumar"))


//includes
//let address = "Hyderabad"
//console.log(adress.includes('h')) //False
//console.log(adress.includes('d')) //true
//console.log(adress.includes('H')) //true

//indexOf()
//let l1 = "Java is a Programming Language"
//console.log(l1.indexOf("J"))
//console.log(l1.indexOf("a"))
//console.log(l1.indexOf("a", 2))
//console.log(l1.indexOf("a"))


//let l2 = "JavaScript"
//console.log(l2.replace("JavaScript", "React Js"))
//console.log(l2)

//let l3 = "Java is a Programming Language"
//console.log(l3.replaceAll('a', 'A'))


//let cname = "Sai Kiran"
//console.log(cname.toUpperCase())
//console.log(cname.toLowerCase())

//let oderName = "samsung"
//console.log(orderName)
//console.log(orderName.length)
//console.log(orderName.trim())
//console.log(orderName.length)


let l4 = 'Java : Python :JavaScript :PHP'
console.log(l4) //Java : Python :JavaScript : PHP
console.log(l4.split(":")) //['Java', 'Python', 'JavaScript', 'PHP']

l5 = ['Java', ' Python ', ' JavaScript ', ' PHP' ]
console.log(l5)
console.log(l5.join(":")) //Java : Python : JavaScript : PHP