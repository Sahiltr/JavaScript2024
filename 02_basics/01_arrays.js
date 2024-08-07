//arrays
const myArray = [0, 1, 2, 3, 4, 5, true, 'Sahil']             
// console.log(myArray[7])

//arrays are resizable in JS
//not necessary to have similar datatypes in js

//Another way to decalre array
const arr = new Array(1, 2, 3, 4)



//Array methods

myArray.push(8)
// console.log(myArray)
myArray.pop()

myArray.push("Thakur")
// console.log(myArray)


myArray.unshift(10)
// console.log(myArray)

myArray.shift()               //shift is like pop()
// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(5))
// console.log(myArray.indexOf(9))
myArray.pop()
myArray.pop()
myArray.pop()



// const newArr = myArray.join()
// console.log(myArray)
// console.log(newArr)
// console.log(typeof newArr)




//*********************************************slice, splice***********************************************************


//slice
console.log("Orignal array:", myArray)
const myn1 = myArray.slice(1,3)
console.log("sliced part:",myn1)
console.log("Orignal array after using slice:",myArray)



//splice
console.log("Orignal array:", myArray)
const myn2 = myArray.splice(1,3)
console.log("Spliced part:",myn2)
console.log("Orignal array after using splice:",myArray)
