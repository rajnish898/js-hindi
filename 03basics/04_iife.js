// Immediately Invoked Function Expressions
//global scope ke pollution jaise variable decalaration ko hatne ke liye iife ka use kara he

(function chai()
 {
     //synatax of named iife
    console.log(`DB CONNECTED`);
})();

( (name)  =>  {
    console.log(`DB CONNECTED TWO ${name}`);
    
}
     
)('rajnish');
