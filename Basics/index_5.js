/* Event Loop,
JS run time environment (JS Engine(Memory heap,call stack), web API's, Callbackqueue/Task queue)
Memory Heap : All variables are stored in the memory
Call Stack  : when a function is called, It is pushed into call stack 
              and when function returns a value it is poped out of stack(Last in first out)
Web API's   : Browser's web api, All the setTimeout, promise, dom etc,
              All these api's are not implemented in javascript they are features provided 
              by brower that JS has access to
Callbackqueue: Task queue or message queue(First in first out)
Event Loop  : Check if call stack is empty, the push a item from callback queue into stack
*/