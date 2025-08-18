let btn = document.querySelector("#btn1");   //Arrow function on the div
btn.onclick=(event)=>{
    console.log("btn1 was Clicked ");
    let a = 45;
    a++;
    console.log(a);
    
    console.log(event);
    console.log(event.type);   //Output= mouseOver
    console.log(event.target); //outPut= 

};

let div = document.querySelector("div");    //when hover the on the div it print certain message via function
div.onmouseover =(e) =>{
    console.log("Your are in inside the div");
    let b = 48;
    b++;
    console.log(b);
    


};

//Remember you can only use the one event handle a time MEANS arrow function with the same functon eg: onmouseover

            //Beast way to handle the event in the javaScript

            //they are the EventListenrs



// let btn = document.querySelector("#btn1");   //Arrow function on the div
// btn.onclick=(event)=>{
//     console.log("btn1 was Clicked ");
//     let a = 45;
//     a++;
//     console.log(a);
    
//     console.log(event);
//     console.log(event.type);   //Output= mouseOver
//     console.log(event.target); //outPut= 

// };             
  
           // Do the Same thing using the Event listenr

  //Add the Event Listner
let btn = document.querySelector("div");

btn.addEventListener("Click",() => {               //Creating the Event Listner
    console.log("Button Was Clicked");
    

});


let btn2 = document.querySelelector("#btn2");      //Event listner to print on click button 2 
btn2.addEventListener( "click" , (evt) =>{
    console.log("Button 2 Was Clicked");
    console.log(evt.type);


});




   //Remove the Event listenr  
       //eg =>  node.removeEventListener("event Name", callback) Alos need to define the function
   
   btn2.removeEventListener("click",() =>{
     console.log("Button 2 Was Clicked");
   })


   //Revision of the 

              

