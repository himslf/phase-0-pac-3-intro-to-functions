// Follow along with the examples here

function doNothing() {
}


function sayHello() {
    console.log("Hellerr!");
}
sayHello();


function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
// sayHelloToGuadalupe();
// no senses in favoritism 


function sayHelloToLiz() {
    console.log("Hello, Liz!");
}


function sayHelloToSamip() {
    console.log("Hello, Samip!");
}


sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

console.log("");
console.log("---------------x-------------");
console.log("");

function doSomething(thing) {
    console.log(thing);
}
  
doSomething( "not THING but still prints" + " " + 2 + 2 + " " + (2+2) );
// passing the argument 'anything' into our function


function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
  
sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

console.log("");
console.log("---------------y-------------");
console.log("");

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Julio", "hello");

console.log("");
console.log("---------------z-------------");
console.log("");

function addThis(x,y) {
    return x + y;
    console.log("this won't print. aftern'return', exits function")
}
console.log(addThis(33, 66)); // 99


//  BUT reversing the order of calls with show both

function addThat(a,b) {
    console.log("this WILL print since before'return'.")
    return a + b;
}
console.log(addThat(2, 3));