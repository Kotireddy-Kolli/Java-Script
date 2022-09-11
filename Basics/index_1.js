
// let a=10

// function outer(){
//     let b=20
//     function inner(){
//         let c=30
//         console.log(a,b,c)
//     }
//     inner() //invoking inner function
// }

// outer()

/* Java script checks if 
c is defined inside the inner functionscope, It does, so it prints to console.
b is available inside the inner scope, It doesn't, it goes one level up and checks in outer function scope, so it prints to console
b is available inside the inner scope, It doesn't, it goes one level up and checks in outer function scope, It doesn't finds, 
        It goes one more level up and checks in global scope, so it prints to console */


/* This is the example of lexical scoping, 
Which describes how java script resolves the variable names when functions are nested.
When we have nested functions, JS variable lookup starts with inner most function for where we are tring to access the variable 
and moves outwards untill it reaches the global scope

Nested function will have access to variables declared inside it's own scope as well as variable declare outter scope. */


// Closers

// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner()
// }

// outer()
// outer() 
/* With every new invocation of function, a new tempory memory is established and counter is initalized to zero and incrimented */

/* Lets say we don't want to invoke the inner function right away,
Lets return the innser function and store in a variable*/

function outer(){
    let counter=0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}

const fn=outer()
/* Invoking inner function twice */
fn()
fn()
/* Closures : In Js, when we return a function from another function, we are effectively
returning a combination of function definition along with the function's scope.
This would let the function definiton ghave an associated persistent memory which could 
hold to the live data between executions.
This combination of functions and it's scope chain is what is called a closure in JS*/


/* Function Currying,

Currying is a process in functional programming in which we transform a function with multiple 
arguments into a sequence of nested functions that takes one arguemnt at a time 
fucntion f(a,b,c) to function f(a)(b)(c)*/


/* This Key word,

It is used in a function, refers to the object it belongs to
It makes functions reusable by letting you decide the object value
This value is determined entirely by how function is called */

// function sayMyName(name){
//     console.log(`My name is ${name}`)
// }

// sayMyName("Hello")
// sayMyName("World")

/* 4 Ways to call functions in JS, to determine the value for this key word

1. Implicit,
2. Explicit, 
3. new, 
4. Default binding.  */

/* Implicit, If a function is called using dot notation then object to the 
left of dot is what this keyword is referencing */

const person={
    name : "koti",
    sayMyName : function (){
        console.log(`My name is ${this.name}`)
    }
}

// person.sayMyName()

/* Now let say the function is outside, Seperated from person object */

function sayMyName(){
    console.log(`My name is ${this.name}`)
}

/* In this senario, we have to explicitly specify the context when function is called,
In JS, Every function have a built in method named call. which allows you to specify 
the context with which function is invoked */

sayMyName.call(person)

/* New Binding,
Function is invoked with new keyword is referencing an empty object */

/*constructer function */
function Person(name){
    this.name=name
}

const person1=new Person("Koti")
const person2=new Person("Reddy")

console.log(person1.name,person2.name)

/* Default Binding,
Fall back binding when above are not specified */

sayMyName()
/* JS, will default it to global scope, since it doesn't find it, it return undefined */