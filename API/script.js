//Fetch API
//The Fetch API provide an interface for fetching (Sending / Reciving) Resources
//It use Request and Response objects.
//The fetch() method is used to fetch a resources (data).



// UnderStanding Terms
// AJAX   : is Asynchrous JS & XMLDocument   //Traditional method to Recivve the data in XML
// JSON   : is JsvaScript Object Notation    //Modern Method to Recive the data in JSON form 
// JSON() : retuns a Second Promise that resolve with the result of parsing the Response with the parsing the
//          respone body text as JSON. (Input is JSON , Output is JS object)


const URL = "https://serpapi.com/search.json?engine=google&q=Coffee&location=Austin,+Texas,+United+States&google_domain=google.com&hl=en&gl=us";
const getFacts = () =>{
    let respone = await fetch(URL   );  //Api fetch the url
    console.log(respone); //Print the resonse on the console (jSon formate)

    let data = await respone.json(); //Second response to print the data 
    console.log(data[0]);

}













