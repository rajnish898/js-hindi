const userEmail =[]

if (userEmail) {
    console.log("user has email");
    
}
else {
    console.log("dont have email");
    
}

// falsy value

// false , 0 , -0, BigInt 0n, "", null, undefined, NaN


//truethy values

// "0", 'false' ," ",[], {}, function() {}

// if (userEmail.length == 0) {
//     console.log("array is empty");
    
// }

const emptyObj ={}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("objects is empty");
    
// }

// Nullish coalescing operator (??) null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 =null ?? 10 ?? 20


console.log(val1);

//ternary operator

// condtion ? true:false

const iceteaprice =100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");






