//date

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


//month strated on 0-11 
//let create own date using date object

let mycreatedate = new Date(2025,0,30)


let mycreatedate1 = new Date("01-14-2025")
// console.log(mycreatedate.toDateString());
// console.log(mycreatedate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedate1.getTime());

//convert into seconds and usse it floor value

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDate()}`

newDate.toLocaleString('default',  {
    weekday:"long",
   

})
console.log(newDate);




