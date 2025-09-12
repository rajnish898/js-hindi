// Singleton
//object.create constructor

//objects literals
//declare a symbol

const mysym = Symbol("key1")

const JsUser = {
    name: "rajnish",
    "fullname": "rajnish singh",
    age : 18,
    [mysym] : "mykey1",
    location: "Jaipur",
    email: "rajnishsingh@gmail.com",
    lastloggedIn : ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log( JsUser[mysym]);
// console.log( typeof JsUser[mysym]);


JsUser.email = "rajnish@chatgpt.com"

// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "rajnish@gpt.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
    
}
JsUser.greetingtwo = function() {
    console.log(`Hello JS User , ${this.name}` );
    
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())




