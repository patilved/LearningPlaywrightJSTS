
//what is Hoisting?
// In JavaScript, hoisting means that declarations are moved to the top of their scope before code execution.

// console.log(a); //undefined 
// var a =10;
// console.log(a);

//hoisting with functions

greet();


function greet(){
    console.log("Hello world");
}


//Hoisting with let
// Variables declared with let are hoisted,but they are NOT initialized.They enter the Temporal Dead Zone(TDZ) from the start of their block until the declaration line.


// console.log(b);
// let b=20;
// console.log(b);  //REFERENCE ERROR


let c= 5;

if(true){
    console.log(c);
    c=4;
    console.log(c); //TDZ
    let c=45;
    console.log(c);
}