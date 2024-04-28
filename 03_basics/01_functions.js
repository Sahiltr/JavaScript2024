// function sayMyname(){
//     console.log("s")
//     console.log("a")
//     console.log("h")
//     console.log("i")
//     console.log("l")
// }

// sayMyname   //this is funciton reference
// sayMyname()   //now i am executing function


function addTwoNumbers(x,y){
    console.log(x+y)
    return x+y
}


// addTwoNumbers('1','3')
// addTwoNumbers(1,'3')

const x = addTwoNumbers(1,3)
console.log("x:",x)


function loginUserMessage(username){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Sahil"))

function loginUserMessage1(username = "Guest"){       //here we gave default value
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage1())


//When we don't know how much parameters will go into funciton then  we can use rest parameter  ...
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300))



function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(100,200,500,200))


const user = {
    username : "sahil",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is $${anyObject.price}`)
}
handleObject(user)



// we can directly pass the objects too
handleObject({
    username : "sahil",
    price : 199
})



//passing array in fucntions

const myArr  = [1,2,3,4,5]
function returnSecondvalue(arr){
    return arr[1]
}
console.log(returnSecondvalue(myArr))
console.log(returnSecondvalue([1,2,3,4,5]))