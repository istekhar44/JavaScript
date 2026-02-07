console.log("hellow");
//alert("hellow");
window.console.log(window);
console.dir(document.body);     //print the body of the html
console.dir(document.head);     //print the head of the html

// document.body.childNodes[].innerText= "abcd";   //Change the text of the html   
//document.body.background = "green";              //Change the background of the html


       //Accessing the element by id:

let heading = document.getElementById("heading1");      //Access the element by id 
console.dir(heading);


let heading2 = document.getElementsByClassName("container");     //Acess the Elemtnt of the html by the class
console.dir(heading2);
console.log(heading2);

              //    Query Selector

    let element = document.querySelector("p");      //Select the single elment 
    console.log(element);

    let elements = document.querySelectorAll("p");      //select the all element it provide the node 
    console.log(elements);
                      
                  //Different properties of the js
              
  /* tagName  //return tag for element nodes

   innerText //return the text content of the element of all its children

   innerHTML  // return the plain text or HTML content in the element

   textContent //return textual content even for hidden elements */

   console.log(document.body.firstChild);

   document.querySelector("div").children;    //return the all element of the div  
   
   document.querySelector("div").firstChild;  //Return the first element of the first Children


   




   






  
            
