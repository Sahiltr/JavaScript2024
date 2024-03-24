const name = "Sahil"
const num = 50

console.log(name+num+"AIR")                                     //outdated syntax   we will use backticks  ``
console.log(`Hello my name is ${name} and my AIR is ${num}`)

//another way to declare the string is

const str = new String("SahilThakur")

console.log(str[0])
console.log(str.__proto__)
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.charAt(0))
console.log(str.indexOf('Z'))
console.log(str.indexOf('S'))
console.log(str.substring(0,5))
console.log(str.slice(-10,4))


const newStr = "   Sahil  "
console.log(newStr.trim())




const url  ="https://sahil.com/sahil%20thakur"

console.log(url.replace('%20','-'))
console.log(url.includes('sahil'))




const str2 = "sahil-thakur-rajpoot"
console.log(str2.split('-'))