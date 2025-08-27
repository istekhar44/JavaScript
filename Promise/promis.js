// Callback function After Study the promise function

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
//Rejected: The result is an Error object 







const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("I am promise");
        resolve ("Sucess");  //if it is resolve use the "then" function in the arrow function
        reject("error");    //if the promise if rejected use the "Catch" functionnin the form of the arrow function

    });
};

let hellow2 = getPromise();
hellow2.then((result)=>{      // If the promise is resolve what work to do
    console.log("Promise is fullFilled");
    

});

hellow2.catch((error)=>{    //If the promise is rejected use the catch function what to after the error
    hellow2.log("Promise is Rejected");

});








//What is the AsyncFunction

function AsyncFunction(){                   //Creating api 1
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Some Data");
            resolve("sucess");

        },2000);

    },);
};

let hellow = AsyncFunction();   //Callig the api 2 
hellow.then((result)=>{
    console.log("fetching the Data1....");

    let p2 = AsyncFunction();    //calling the other function 
    p2.then(()=>{
        console.log("Fetching the Data 2....");

    });

});










function AsyncFunction2(){                  //Creating api 2
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("Error");

        },2000);

    },);
};

console.log("Calling the api 2") //Caling the api 2
let p2 = AsyncFunction2();
p2.catch((error)=>{
    console.log("Error in the Pogram");
});


//Promise Chain is Much better than the CallBack Hell problem .
//write the code and learn the progam
 
// .
// .
// .
// .
// .
// .
// .
// .














