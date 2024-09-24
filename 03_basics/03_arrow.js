const user = { 
    username : "sahil",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);          //this used to refer to current context
    }
}

// user.welcomeMessage()
// user.username = "sohil"
// user.welcomeMessage()

// console.log(this)                                                 //refers to an empty object in node


// function chai(){
//     console.log(this.username)                                   // we cannot use "this inside funciton it will give error
// }

// const chai = function(){                                        // this wont work here too        --> this only works with objects not functions
//     console.log(this.username)
// }

// chai()



/********************************ARROW FUNCTIONS*********************************************** */


const chai = () =>{
    let username = "sahil"
    console.log(this);
}

// chai()


const addTwo = (num1,num2)=>{
    return num1+num2
}
// console.log(addTwo(4,3))


//or we can also use a single line if our function have only single statement
const addThree = (num1,num2,num3)=> num1+num2+num3            //Implicitly return
// console.log(addThree(1,2,3))



//To return an object we have to wrap it in "()" braces
const addTwo1 = (num1,num2)=>({username:"sahil"})
// console.log(addTwo1(0,0))

console.log(this)