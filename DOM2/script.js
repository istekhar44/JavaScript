// Change Heading 1 text and color
let heading1 = document.getElementById("heading1");
heading1.textContent = "Apna College - DOM in Action";
heading1.style.color = "black";

// Change Heading 2 text and color
let heading2 = document.getElementById("heading2");
heading2.textContent = "Updated: Learning the Document Object Model";
heading2.style.color = "green";

// Change all list items text and color
let fruits = document.querySelectorAll(".fruit");
fruits[0].textContent = "Apple";
fruits[1].textContent = "Orange"; // fixed spelling
fruits[2].textContent = "Banana";
fruits[3].textContent = "Kiwi";

// Apply color to all list items
fruits.forEach(item => {
    item.style.color = "red";
    item.style.fontWeight = "bold";
});

document.body.style.background = "pink";

       
           
         // Conatianer2 


let hellow = document.querySelectorAll(".box");    //Use for change the itmes names 
hellow[0].textContent = "Apple";
hellow[1].textContent = "Apple";
hellow[2].textContent = "Apple";

let box = document.querySelectorAll(".box");      //Use for change the items color and the text-content via loop 

box.forEach(textContent => {
   textContent.style.color = "red";
   textContent.style.background = "gray";
   textContent.textContent = "Grapes"
   
   
});











