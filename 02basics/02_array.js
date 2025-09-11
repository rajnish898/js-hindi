const marvel_heroes = ["thor", "ironman", "spidermsan"]

const dc = ["superman" , "flash" , "batman"]

marvel_heroes.push(dc)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);


// const allheroes = marvel_heroes.concat(dc)
// //concat gives you new array where all eleemnt are combined

// console.log(allheroes);

const allnewhero = [...marvel_heroes, ...dc]

// console.log(allnewhero);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = anotherarray.flat(Infinity)

// console.log(realanotherarray);


console.log((Array.isArray("rajnish")))
console.log(Array.from("rajnish"));
console.log(Array.from({name: "rajnish"})); // **it do not convert it and gives null string


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
