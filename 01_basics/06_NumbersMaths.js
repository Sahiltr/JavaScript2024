const num = 400
console.log(typeof num)


const num1 = new Number(4800.45667)
console.log(num1)
console.log(num1.toString().length)
console.log(num1.toFixed(2))


const num2 = 123.876
console.log(num2.toPrecision(3))
console.log(num2.toPrecision(4))
console.log(num2.toPrecision(2))


const hundereds = 1000000
console.log(hundereds.toLocaleString())


//++++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math)
console.log(Math.abs(-456))
console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))


console.log(Math.random())

console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20

//=>IMP (Math.random() * (max-min+1)) + min
console.log(Math.floor((Math.random() * (max-min+1)) + min))