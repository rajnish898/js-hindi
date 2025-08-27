const name = "rajnish"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my roll no is ${repocount}  `);//String interpolation

//declaration of string in the form of objects

const gamename = new String('rajnish-IT-com')

//We  use differnt methods in string
// to gaain extra knowledge of it go for inspect and also mdn Pages
console.log(gamename[0]);
console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));

console.log(gamename.indexOf('j'));

 const newString = gamename.substring(0,4)
 console.log(newString);

 const anotherString = gamename.slice(-10,4)
 console.log(anotherString);
 console.log(gamename.length);

 const newString1 = "    rajnish    "
 console.log(newString1);
 console.log(newString1.trim());

 const url = "https://rajnish.com/rajnish%20rajput"
 console.log(url.replace('%20', '-'));


 console.log(url.includes('kumar'));

 console.log(gamename.split('-'));
 
 
 
 
 







