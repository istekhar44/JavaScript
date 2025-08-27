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

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b ,sumCallback){  //Use the callback function
    console.log(a,b);
}

calculator("Print the Sum",4,5,sum);  //use as normal Callback

calculator("Print the sum",1,3,(a,b) => {  //use the arrow function
    console.log(a+b);
},);   //set the time limit







function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log("data",dataId);
        if(getData){
            getNextData();
        }
        

    },2000);

}
//Nested Loop for the call print after the time delay
getData(1,()=>{      
  getData(hellow,()=>{     // <= this is Callback hell
    getData(3,()=>{    
    })
  });
});

  


              //Promises 
//Promises Resolve the callBack Hell Problems

//Promise is for "Eventual" Completion of task .It is an object in JavaScript
//It is a solution to callback hell.

//There Are the Three States 1.Pending 2.fullfiled 3.Rejected

let promise = new promise((resolve ,reject)=>{
    console.log("Promise");
    resolve("123");

})







 










