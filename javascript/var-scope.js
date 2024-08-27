//BLOCKSCOPE its a variabel that just allowed at one syntax
//winow scope mean a global scope 
//variabel b will not define cause there is block scope
//a can use every where cause a not in any syntax 

var a = 1;

function tes(){
    var b=2;
    console.log(a);
    
}
tes();
console.log(b);

//but if we code like this
//name conflict cause there is 2 a for inside and outside syntax
//window.a mean they will use a global var

var a = 1;

function tes(){
    var a=2;
    console.log(window.a);
}
tes();
console.log(a);

//in case he will be a 2 cause there is 2 var of a making it
//use newest var of a
var a = 1;

function tes(){
    a=2;
}
tes();
console.log(a);

//case 3
//there is var a first its 1 but for parameter
//in arguments there is 2

var a = 1;

function tes(a){
    console.log(a);
    
}
tes(2);
console.log(a);
