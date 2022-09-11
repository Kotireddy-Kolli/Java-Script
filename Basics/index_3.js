// Asyncronus JS

/* setTimeout(funtion,time_in_millisecondes,param1,param2,...) */

// function greet(name){
//     console.log(name)
// }

// setTimeout(greet,4000,"koti")

/* Some time you want to clear/stop setTimeout,
You can use clearTimeout() method passing the idetifier returned by setTimout as parameter */

// function greet(name){
//     console.log(name)
// }

// const timeoutid=setTimeout(greet,4000,"koti")
// clearTimeout(timeoutid)

/* setInterval(function,time,param1,param2,...)
 runs same code over and over again at regular intervals */

// function greet(name){
//     console.log(name)
// }  
// const intervalid=setInterval(greet,1000,"koti")
// setTimeout(clearInterval,5000,intervalid)

/* Call backs,
In Js, Fucntions are first class ojects. Which means just like objects,
a function can also passed as arguments to functions and returned as values from other functions*/

// function greet(name){
//     console.log(name)
// }
// function higherOrderFunction(callback){
//     const name="Koti"
//     callback(name)
// }
// higherOrderFunction(greet)

/* Promise, 
The Promise object represents the eventual completion (or failure)
 of an asynchronous operation and its resulting value.
 
    1. Create Promise, */
 //const promise= new Promise()

 /* 2. Fullfill or reject Promise,
        As promise constructer funtion accepts one function as argument
        That function will automatically receiving 2 arguments(resolve,reject) both arguments are functions   
        resolve() when called changes the status from pending to resolved
        resolve() when called changes the status from pending to rejected
        we can not directly mutate the status of promise*/

// const promise1= new Promise((resolve,reject)=>{
//     //code to execute 
//     setTimeout(()=>{
//         //up on successfully completion of task
//         resolve()
//         //up on Failure/Failed to complete the task
//         //reject()

//     },4000)
// })

/* 3. How to execute call back function(success/failure) based on status change 
        when we create a promise using constructer function, the promise object gives us access to 
        2 methods/functions => then & catch.
        If staus changes to fullfilled then function passed to then() will be executed
        If staus changes to rejected then function passed to catch() will be executed
        since it will take function as arguments, these are called call back functions*/

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //up on successfully completion of task
        resolve()
        //up on Failure/Failed to complete the task
        //reject("Failed to complete the Task")

    }, 4000)
})

/* The arguments that we pass to resolve and reject 
are automatically passed to the call back functions*/
const onFullfillment= () =>{
    console.log("Promise Fullfilled")
}
const onRejection= (err) =>{
    console.error(err)
}

promise2.then(onFullfillment)
/*then(onFullfilled,onRejected) It is not a recommended approch, 
As it will only handle the error from only promise
What if your callback function itself throws an error/exception their is no code to handle that*/

promise2.catch(onRejection)

/* Even if your onFullfillment callback throws an exception, then we can handle that exception*/

/* Chaining Promises,
    Both then() and catch() methods return promises, This means then and catch methods can be chained in JS
    Above 2 statments can be rewrite as below*/
promise2.then(onFullfillment).catch(onRejection)

/* Static methods,
   1. Promise.all,
Takes Promises as Iterables as Input and returns single promise that resolves to array of results of input promise
Returned promise will resolve when all the input promises resolved
Rejects immediately, in any of input promise reject, Reject with first rejections message/error */

// promise.all([promise1,promise2,...]).then((values)=>{
//     console.log(values); output : array [1,42,"foo"]
// })

/* 2. Promise.allSettled()
waits for all input promises to complete regradless of weather or not one of them is rejected

   3. Promise.race()
Returns a promise that fullfiles or rejects as soon as one of the input promise fullfilled or Rejects,
with the value or reason from that promise*/

