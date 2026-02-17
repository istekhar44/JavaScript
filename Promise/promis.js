// // Callback function After Study the promise function

// const { use } = require("react");

// function getData(dataId , getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);  //Calling the First function

//         getNextData(()=>{
//             if(getData){
//                 getNextData();  //Calling the second function

//             }

//         });
        
//     }, 2000);
// }

// getData("Api is Calling",()=>{             //This is the callback hell   => promise solve this problem 
//     console.log("getting the Data 1....");
//     getData("Data is Fetching",()=>{
//         console.log("getting the Data 2....");
//         getData("data is Executing",()=>{
//             console.log("getting the Data 3....");
            
//         });

//     });

// });





                           //Promise 

//Promise is for "Eventual" completion of task .It is an object in JavaScript.
//It is Solution to Callback hell.
//Eg : let promise = new promise((resolve,reject)=>{.....} )

//A JavaScript Promise object can be :  Types of the promise 
//Pending : The result is undefined
//Resolve : The result is value (fuilfilled)
//Rejected: The result is an Error object 



const promise = new promise (function(resolve , reject){  //Promise is Creted 
    setTimeout(function(){
        console.log("Task is Completed ");

    },1000);
    resolve();
},1000)

promise.then(function(){   // .Then is realted with the promise is Prsolve 
   console.log("Promise is Consume ");
})





const promise2 = new Promise(function(resolve, reject){  //Crete the Second Promise 
    setTimeout(function(){
        console.log("Complete the 2 Task");
        resolve();    //Promise is reslove 

    },1000)  //1 second each execute the task 
}).then(function(){
     console.log("Print the Second Task");  //print the 2task is completed
})



//Promise to pass the data 

let promise3 = new promise(function(resolve , reject){
    setTimeout(function(){
        resolve({ username :  "chai ", email: "md-istekhar-alam" });   //Pass the data to the promise to .then 

    },1000)

})
promise3.then(function(user){  //pass the data
    console.log(user)  
})


//Promise 4 enhance to pass the data and Error if else
const promise4 = new promise(function(){
    let error = true;
    if(!error){       //Error is not occured 
        resolve({username: "Hitesh" , age: 23 , email: "mdistekharalam535@gmail.com"});
    }else{            //Erroe is occured 
        reject("Something is Wrong ");
    }
})


//PromiseName.then().catch.final();    //It is the Complete promise call
promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is Finally resolve or Rejected");
})




//Promise USES the Acync and Await
const promise5 = new promise((resolve,reject)=>{
    let error = true;
    if(!error){
        resolve({username : "Salamat", password :"123"});
    }else{
        reject("Something went to worng");
    }
})

async function consumepromise5 (){
    try {
        const response = await promise5;
        console.log(response);      //Print the Response
    } catch (error) {
        console.log(error)  //Print the Error 
    }
}
consumepromise5();  //Call the promise 

















