//document.body.style.background = "pink";   //Change the backgroud color of the html

// let heading1 = document.querySelector("div");
// heading1.textContent = "This is Change via JAVASCRIPT";   //Change the text Content of the javaScript
// heading1.textContent.color= "blue";

// // document.getElementById("para").style.background = "green";  //Change the backgroud of the tag of the para

// //DOM Manipulation Document Object Model




                //   ATTRIBUTE
                

// // 1. getAttribute(attr)   => to get the attribute value 

// // 2. setAttribute(attr,value)  => to set the attribute val th




 // Select the ul and add a class
   let hellow =  document.querySelector("ul")
   hellow.setAttribute("class", "nav-list");
    console.log("class");

    // Select the div inside container and set an id
    document.querySelector(".container div").setAttribute("id", "description");

    // Add a title attribute to each li
    let listItems = document.querySelectorAll("ul li");
    listItems.forEach((item, index) => {
        item.setAttribute("title", "Menu item " + (index + 1));
    });



    //Select the div of the elemert 
    let divElement = document.querySelector(".container1");

    // Change background color
    divElement.style.backgroundColor = "pink";

    





 




