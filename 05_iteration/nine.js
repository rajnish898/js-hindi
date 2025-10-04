const myNums = [1, 2, 3]

//  const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval} `);
    
//     return acc+ currval

//  } , 3) //value intialization with value 3
//  console.log(myTotal);


 const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0)
 console.log(myTotal);

 const ShoopingCart = [
    {
    itemname : "js course",
    price : 1999
    },
    {
    itemname : "Python course",
    price : 2999
    },
    {
    itemname : "Mobile dev course",
    price : 3999
    },
    {
    itemname : "data science course",
    price : 3999
    }
]
    
const pricetopay = ShoopingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(pricetopay);
