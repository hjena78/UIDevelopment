//map
arrayOne = [10, 20, 30, 40, 50]
//           0   1   2   3   4

//function outside the filter
function f1(value){
    return value * 2
}

console.log(arrayOne.map(f1))

//function inside the filter
let l1 = arrayOne.map(function(value){
    return value * 2
})
console.log(l1)
console.log(typeof(l1))   
