alert("hello this is a 2nd day of javascript ")
// let cannot be redeclare 
let x=10;
// let x=20;    <---this is wrong ,problem can be solve using block 


// Redeclaring a variable inside a block will also redeclare
//  the variable outside the block:

var z = 10;

{
var z= 2;

}

// const cannot be redeclare 

const name = varun ;
// const name =arun ;  gives an error 

// const sname ; gives an error 
sname =varun ;


