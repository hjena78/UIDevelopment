//reduce
arrayOne = [10, 20, 30, 40, 50]
//           0   1   2   3   4

//function outside the filter
function f1(valueOne, valueTwo){
    return valueOne + valueTwo
}

console.log(arrayOne.reduce(f1))

//function inside the filter
let l1 = arrayOne.reduce(function(valueOne, valueTwo){
    return valueOne + valueTwo
})
console.log(l1) //150
console.log(typeof(l1)) //number

//10+20=30
//30+30=60
//60+40=100
//100+50=150

