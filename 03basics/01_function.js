

function sayMyName() {
 console.log("r");
console.log("a");
console.log("j");
console.log("n");
console.log("i");
console.log("s");
console.log("h");

}


// sayMyName()

// function addtwono(number1, number2) {


//    console.log(number1+number2);
   
// }

function addtwono(number1, number2) {
     
    // let result  = number1+number2
    // return result;

    return number1+number2;
   
    
   
}

const result = addtwono(3 , 5)

//  console.log("result :", result);


function loginUserMessage(Username = "sam") {
    if(!Username){
        console.log("please enter the user name");
        return;

    }
    return `${Username} just logged in`

}

// console.log(loginUserMessage("rajnish singh") )

// console.log(loginUserMessage("rajnish") )


function calculateCartPrice(val1,val2, ...num1) //rest operator
 {
          return num1
 }
 
 console.log(calculateCartPrice(200,344,500,677));

 const user = {
    username: "rajnish",
    price: 199
 }

 function handleObjects(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
 }

//  handleObjects(user)

// jaroori nahi objects banke pass kare direct function calling ke samye he objects  pass kar sakte he

handleObjects({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,500,100]

function returnSecondvalue(getArray) 
{
    return getArray[1]
} 
// console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([100,200,300,400]))







