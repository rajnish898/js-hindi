

let a = 300

if(true) {

let a =10
const b = 20
// console.log("Inner:",a);

}

//  console.log(a);
// console.log(b);

//child class parent class ke property ko  access kar sakta he
// par parent class child ke class ke property nahi access kar sakta

function one() {
    const username = "Rajnish"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

     two()
    
}

// one()

if(true) {
    const username = "rajnish"
    if(username == "rajnish") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ****************** interseting *********************
 console.log(addone(5));
  
function addone(num)  {
    return num +1;

}

 addTwo(5) // you dont use before declaraton 

 const addTwo = function(num) {
    return num+2;
 }







