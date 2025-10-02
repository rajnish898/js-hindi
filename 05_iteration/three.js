//For Of

// array specfc Loops

// [{},{},{}]

const arr =[1, 2, 3, 4, 5]

for (const val  of arr) {
    // console.log(val);
    
    
}

const greeting = "Hello World"
for (const greet of greeting) {
    if(greet == " ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
    
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('FR', "Frsnce")
map.set('USA', "United STate OF America")
map.set('IN', "India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-',  value );
    
}

const myobject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key , value] of myobject) {
//       console.log(key, ':-',  value );
// }
