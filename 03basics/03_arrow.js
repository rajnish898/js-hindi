// const user ={
//     username: "rajnish",
//     price: 999 ,

//     welcomemessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()


//  console.log(this);



//  function chai()
//  {
//     let username = "rajnish"
//     console.log(this.username);
    
//  }

//  chai()


// function decalartion with arrow function

// const chai = function() {
//      let username = "rajnish"
//    console.log(this.username);

// }
const chai = () =>  {
     let username = "rajnish"
   console.log(this);
}

// chai()

// arrow function
// const addtwo = (num1 , num2) => {
//     return num1 + num2; //explicit return 

// }

//implicit return
// const addtwo = (num1 , num2) => (num1 + num2) ;

const addtwo = (num1 , num2) => ({username: "rajnish"} )


// console.log(addtwo(3,4));

const myArray = [2,5,7,2,5]

 