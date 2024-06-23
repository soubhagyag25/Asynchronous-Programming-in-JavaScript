/*Asynchronous actions are those actions that we initiate now and they finish later
Due to synchronous programming,sometimes important instructions get blocked due to some previous instructions,
which causes a delay in the UI.
Asynchronous Code execution allows to execute next instructions immediately and doesn't block the flow 

Synchronous actions are those actions that initiate and finish one by one
In Synchronous programming, each instruction waits for the previous instruction to complete its execution*/


//1. Synchronous Programming
console.log("Synchronous Programming ")
function f1()
{
    console.log("I am Fun1")
}
let f2=()=>console.log("I am Fun2")
let f3=()=>console.log("I am Fun3")
f1()
f2()
f3()
console.log("That is how Synchronous Programming Works\n\n")

//2.Asynchronous Programming
console.log("Asynchronous Programming")
setTimeout(function()
    {
        console.log("I will be Executed after 3 seconds")
    },3000)
console.log("I am first one to be printed")
let f4=()=>console.log("I am the 2nd one to be printed")
f4()
console.log("Ends")
console.log("Start")
