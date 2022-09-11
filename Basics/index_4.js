/* async, await in JS intoduced in 2017,
1. The async keyword is used to declare async functions
2. Async function are functions that are instance of async fucntion constructer
3. unlike Normal function, async function always returns a promise*/ 

// async function greet(){
//     return "Hello"
//     //Here async function will automatically wrap the value to promise
//     // return Promise.resolve("Hello")
// }
// const greeting=greet()
// console.log(greeting)
// greeting.then((value)=>{console.log(value)})

/* await,
1. await keyword can be put infront of any async promise based funtion to 
    pause your code untill that promise settles and returns its result
2.  await only works inside async function.
3.  await keyword suspends the execution untill promise is settled and then resumes with promise return value*/

// async function greet(){
//     let promise =new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("Hello")},3000)
//     })
//     let result =await promise;
//     console.log(result)
//     console.log("Hi")
// }
// greet()

/* Sequenctial vs concurrent vs parallel executions */
//1. Sequence

function resolveHello(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Hello")},3000)
    })
}

function resolveWorld(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("World")},2000)
    })
}

// async function sequenctialStart(){
//     const hello=await resolveHello()
//     console.log(hello) // logs after 3 sec

//     const world=await resolveWorld()
//     console.log(world) // logs after 3+2 sec

//     //unless the second function is dependent on first function, we should not be doing this
// }
// sequenctialStart()

//2. Concurrent
// async function concurrentStart(){
//     // We are calling both the function and storing the value
//     const hello=resolveHello()
//     const world=resolveWorld()

//     console.log(await hello) //logs after 3 seconds
//     console.log(await world) //logs after 3 seconds
// }

// concurrentStart()

//3. Parallel executions, which ever promise resolves first will be log to console

// function parallel(){
//     Promise.all([
//         (async () => console.log( await resolveHello()))(), //logs after 3 seconds
//         (async () => console.log( await resolveWorld()))(), //logs after 2 seconds
//     ])
// }
// parallel()

async function parallel(){
    await Promise.all([
        (async () => console.log( await resolveHello()))(), //logs after 3 seconds
        (async () => console.log( await resolveWorld()))(), //logs after 2 seconds
    ])
    console.log("Finally") // awaits for the promise.all to fulfill then logs finally
}
parallel()