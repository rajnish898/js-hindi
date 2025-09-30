// If
const isuserloggedin = true
const tempreature = 41


// if (tempreature === 40 ) {
//     console.log("less than 50");
    
// }  else {
// console.log("temp is greter than 50");
//   }



// < ,> , <= , >=, == != , === -> type checking, !==


// const score =200

// if (score >100)  {
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);


// const balance =1000

// // if (balance >500) console.log("test") ; //implicit scope
// // console.log("test2");
 
// if (balance < 500) {
//    console.log("less than 500");
   
// }

// else if (balance <750) {
//       console.log("less than 750");

// }
// else if (balance <900) {
//       console.log("less than 900");
// }
// else {
//     console.log("less tha 1200");
    
// }


const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true


if (userloggedin && debitcard  && 2 == 3) {
    console.log("allow purchase course");
    
}
if (loggedinfromgoogle || loggedinfromemail) {
    console.log("user logged in");
    
}