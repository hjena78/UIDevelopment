//indexOf()
//l1 = [10, 20, 30, 40, 50]
//     1   2   3   4   5
//console.log(l1.indexOf(10)) //0
//console.log(l1.indexOf(30)) //2
//console.log(l1.indexOf(50)) //4
//console.log(l1.indexOf(40)) //3

//console.log(l1.indexOf(60)) /-1


l1 = [10, 20, 30, 40, 50]
//     1   2   3   4   5
console.log(l1.includes(10))//true
console.log(l1.includes(60))//false


//adds the element to the end of the array and runs the length of it
l2 = [10, 20, 30, 40, 50]
//     1   2   3   4   5
console.log(l2.length)
console.log(l2.push(60))
console.log(l2.push(70))
console.log(l2.length)
console.log(l2)

//pop
//removes the last element from the array
l1 = [10, 20, 30, 40, 50]
console.log(l1)//[10, 20, 30, 40, 50]
console.log(l1.pop())//50
console.log(l1.pop())//40
console.log(l1)//[10, 20, 30]



//shift()
l1 = [10, 20, 30, 40, 50]
console.log(l1)//[10, 20, 30, 40, 50]
console.log(l1.shift())//10
console.log(l1)//[20, 30, 40, 50]
console.log(l1.shift())//20
console.log(l1)//[30, 40, 50]


//unshift(element)
//add element to the array in the beginning
l2 = ['NameOne', 'Nametwo', 'NameThree']
console.log(l2)
l2.unshift('NameFour')
console.log(l2)

//indexOf()
l1 = [10, 20, 30, 10, 50, 10, 70, 80, 90]
//     0   1   2   3   4   5   6   7   8
console.log(l1) 
console.log(l1.indexOf(10)) 
console.log(l1.lastindexOf(50)) 
console.log(l1.indexOf(10,2))


//concat()
l1 = [10, 20, 30, 40, 50, 60, 70]
console.log(l1)
console.log(l1.concat(100, 300))

//Merging the array
l2 = [10, 20, 30, 40, 50, 60, 70]
l3 = [80, 90]
console.log(l2.concat(l3))

//join
l1 = [10, 20, 30, 40, 50]
console.log(l1)
console.log(l1.join('-'))
console.log(l1.join('"'))
console.log(l1.join(' and '))


//update