//const tinderUser = new Object()         //singleton object

const tinderUser = {}                    //non-singleton objects

tinderUser.id = "123abc"
tinderUser.name = "sahil"
tinderUser,isLoggedIn = "false"

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    password: "password1234567890",
    userfullname : {
        firstname : "sahil",
        lastname  : "sharma"
    }
}

// console.log(regularUser.userfullname.firstname)


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "aa", 4 : "bb"}
const obj3 = {5 : "x", 6 : "y"}


// const obj4 = Object.assign({},obj1,obj2,obj3);

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4)
//whenever values comes form database, they come in form of Array of objects

const users = [
    {
        id   : '1',
        name : 'John'
    },
    {
        id   : '2',
        name : 'tohn'
    },
    {
        id   : '3',
        name : 'yohn'
    },
]

// console.log(users[1].id)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))                //gives an array of keys
// console.log(Object.values(tinderUser))               // gives an array of values
// console.log(Object.entries(tinderUser))               //gives us all key value pairs in array


// console.log(tinderUser.hasOwnProperty('id'))
// console.log(tinderUser.hasOwnProperty('email'))




//DESTRUCTRING OF OBJECTS
const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course              //destructuring
console.log(instructor)



//Let's talk abouy API's

// API's gives info in JSON format

// {
//     coursename : "js",
//     price : "999",
//     courseInstructor : "hitesh"
// }

// or sometimes array of jsons

// [
//     {},
//     {},
//     {}
// ]


