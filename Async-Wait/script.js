      //Async
//async function always return a promise.
//Syntax:  async function myfunctionname(){}

async function hellow(){
    console.log("Helloe");
}


//Await 
//Await pause the execution of its surrounding asysnc function until the promise is settled
//Syntax:   async function myFunctionName(){}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Today is Rainy day");
            resolve(200);

        },3000);

    });
};

async function getWether(){
    await api();                //Await is write in the function 
    await api();
}



//Implemementation of the JavsScript






