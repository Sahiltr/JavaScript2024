//PRIMITIVE DATATYTPES=> (all call by values)

//7 types : String, Number, Boolean, null, undefined, Symbol, bigint


const num = 100
const scoreVal = 99.9

const isLoggedIn = false
const temp = null
let userEmail

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid)

const bigInt = 13234785724985679083434343        //we type 'n' at the end




//REFERENCE TYPE/NON-PRIMITIVE => (called by reference)
//Arrays, Objects, Functions

const heroes = ['shaktiman','nagraj','doga']  //array

let myObj = {     //object
    name:"Sahil",
    age:22
}


//Functions

const myFun = function(){
    console.log("hello world")
    console.log(typeof bigInt)
}

myFun()

console.log(typeof myFun)