const marvel_heroes = ["thor", "ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)

//spread operator best
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)



const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]],]
const arr2 = arr1.flat(Infinity)              //super important to flat all arrays
console.log(arr2)


console.log(Array.isArray("hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Sahil"}))          //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))




