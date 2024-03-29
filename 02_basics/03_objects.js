//singleton
//object.create

//object literals

    
//object has concept of key-value pairs

mySym = Symbol("key1")

const user ={
    [mySym]:"mykey69",           //specific syntax to use symbol as a key in objects
    name:"Sahil",
    age: 20,
    loc:"Jaipur",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Mondays","Saturday"],
    "last name": "Thakur"
}

console.log(user.email)
console.log(user["email"])
console.log(user["last name"])
console.log(user[mySym])

user.email = "sahil@gmail.com" 
// Object.freeze(user)                     //this locks the values of obejct, now we cannot change the values of the object

console.log(user.email)
console.log(user)

user.greeting = function(){
    console.log(`Hello ${this.name}`)

}

console.log(user.greeting())