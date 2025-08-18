//Callback function After Study the promise function

function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("data",dataId);  //Calling the First function

        getNextData(()=>{
            if(getData){
                getNextData();  //Calling the second function

            }

        });
        
    }, 2000);
}

getData("Api is Calling",()=>{             //This is the callback hell 
    console.log("getting the Data 1....");
    getData("Data is Fetching",()=>{
        console.log("getting the Data 2....");
        getData("data is Executing",()=>{
            console.log("getting the Data 3....");
            
        });

    });

});

                           //Promise 

//Promise is for "Eventual" completion of task .It is an object in JavaScript.
//It is Solution to Callback hell.
//Eg : let promise = new promise((resolve,reject)=>{.....} )

//A JavaScript Promise object can be :
//Pending : The result is undefined
//Resolve : The result is value (fuilfilled)
//Rejected: The result is an Erroe object 

let promise = new Promise ((resolve,reject)=>{    //Basic Syntax of Promise 
    console.log("Promise");
    // resolve(123);    <= print the resolve 
    reject("Rejected");
   
}); 



function getData(dataId,getNextData){
    return new promise((resolve,reject)=>{    //Write the promise function
        setTimeout(() => {          //Set Time       
            console.log("DataId",dataId);
            resolve ("Sucess");
            if(getData){
                getNextData();
            }
            
        }, 5000);
    });
}



const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("I am promise");
        //Resolve ("Sucess")
        reject("error");

    });
};












