const user ={
    username: "rajnish",
    price: 999 ,

    welcomemessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
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

const chai = () => {
     let username = "rajnish"
   console.log(this);

}
chai()