
//var -function scoped

var a=10; //global scope

function test(){
    var a=20;   //function scope
    console.log(a)
    if(true){
        var a=30;
        console.log(a)
    }
    console.log("f",a)
}


test();

//var also allows re-declaration
// var a=10;
// var a=20; //no error, re-declaration is allowed
// console.log(a) //20;


//let -block scoped

let b=20;
console.log(b);

function hello(){
    let b=30;
    console.log(b);
    if(true){
        let b=5;
        console.log(b);
    }
    console.log("let->",b);
}

hello();

//let does not allow re-declartion in the same scope


const pi=3.14;
console.log(pi);
pi=3.1456 //Error :Assignment to constant variable

