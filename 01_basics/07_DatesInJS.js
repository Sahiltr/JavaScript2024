//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0 , 23,5, 13)
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now() 
console.log(myTimeStamp.toString())         //output in milliseconds
console.log(myCreatedDate.getTime())        //output in milliseconds
console.log(Math.floor(Date.now()/1000))
console.log(myDate.getDay())
console.log(myDate.getFullYear())
console.log(myDate.getMonth()+1)            // in javascript Months are started from 0 index 




//********************************************CUSTOMIZATION*************************************************** */

myDate.toLocaleString('defaut',{
    weekday: "long"
})