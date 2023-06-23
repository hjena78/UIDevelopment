//l1 = [10, 20, 30, 40, 50, 60, 70, 80]
//     0   1   2   3   4   5   6   7
//console.log(l1) //[10, 20, 30, 40, 50, 60, 70, 80]


//slice(strat, end)
console.log(l1.slice(2)) //[30, 40, 50, 60, 70, 80]
console.log(l1.slice(4)) //[50, 60, 70, 80]
console.log(l1.slice(1)) //[20, 30, 40, 50, 60, 70, 80]
console.log(l1.slice(0)) //[10, 20, 30, 40, 50, 60, 70, 80]


l1 = [10, 20, 30, 40, 50, 60, 70, 80]
//     0   1   2   3   4   5   6   7
//    -8  -7  -6  -5  -4  -3  -2  -1


console.log(l1) //[10, 20, 30, 40, 50, 60, 70, 80]
console.log(l1.slice(2, 4)) //[30, 40]
console.log(l1.slice(4, 8)) //[50, 60, 70, 80]
console.log(l1.slice(0, 6)) //[10, 20, 30, 40, 50, 60]


console.log(l1.slice(-1)) //[80]
console.log(l1.slice(-1, -5)) //[]
console.log(l1.slice(-5, -1)) //[40, 50, 60, 70]

s1 = "sai kiran"
//    012344567
console.log(s1) //sai kiran
console.log(l1.slice(3, 5)) //v