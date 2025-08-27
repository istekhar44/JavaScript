//Fetch API
//The Fetch API provide an interface for fetching (Sending / Reciving) Resources
//It use Request and Response objects.
//The fetch() method is used to fetch a resources (data).

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async() =>{
//     let  Response =  await fetch(URL);   //Calling the api
//     console.log(Response);            //Get the data form the server      //JSON formate to get the data 
//     //  console.log(Response.status);   //Print the status of the api  :Output is  200

//      let data = await Response.json();        //USE to get what type of data is needed
//      factPara.innertext = data[0].text;


// };


                            //2Way to call the api 
// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();

//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }
// btn.addEventListener("click",getFacts);



// UnderStanding Terms

// AJAX   : is Asynchrous JS & XMLDocument   //Traditional method to Recivve the data in XML
// JSON   : is JsvaScript Object Notation    //Modern Method to Recive the data in JSON form 
// JSON() : retuns a Second Promise that resolve with the result of parsing the Response with the parsing the
//          respone body text as JSON. (Input is JSON , Output is JS object)






