const coding = ["js","rb","py", "java","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// }  )

//Arrow function
// coding.forEach( (item) =>  {
//      console.log(item);
     
// }  )

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// }   )


// [ {}, {}, {}] -> very important for database

const mycoding = [
    {
        languagename :"javascript",
        languagefilename: "js"
    },
    {
        languagename :"java",
        languagefilename: "java"
    },
    {
        languagename :"python",
        languagefilename: "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languagename);
    
})