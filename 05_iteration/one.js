//For Loops

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best no");
        
    }
    // console.log(element);
    
}
// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loops ${i}`);
    
   for (let j = 1; j <= 10; j++) {
    // console.log(`inner loops ${j} and outer loops value ${i} `);
    // console.log(`${i} * ${j} = ${i*j}`);
    
   }
    
}

// let myarray = ["Flash", "batman", "superman"]
 //  console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
    
// }


//Break and Continue

// for (let i = 1; i <= 20 ; i++) {

//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i : ${i}`);
    
// }
for (let i = 1; i <= 20 ; i++) {

    if (i == 5) {
        console.log(`Detected 5`);
       continue;
    }
    console.log(`value of i : ${i}`);
    
}