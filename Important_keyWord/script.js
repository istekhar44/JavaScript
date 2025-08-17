console.log("Async Await >> Promis Chain >> CallBack Hell ");

//Synchronous
//Synchronous mean the code run in a particular sequence of instruction given in the program .
//Each instruction wait for the previous intruction to complete its Execution.





function hellow(){
    console.log("hellow");
}
setTimeout(hellow,2000);  //time 1000 = 1sec   //USE to set the time  to Execute the function


//Writte the settime out usig the arrow function
setTimeout(() =>{
    console.log("Print the arrow functon");   
}, 300);






//What is theCallBack function ?
//A CallBack is a function passed as an argument to another function.

function sum (a,b){
    console.log(a+b);
}
function calculator(a,b ,sumCallback){  //Use the callback function
    console.log(a,b);
}
calculator("Print the Sum",4,5,sum);  //use as normal Callback

calculator("Print the sum",1,3,(a,b) => {  //use the arrow function
    console.log(a+b);
},);   //set the time limit




function getData(dataId)




