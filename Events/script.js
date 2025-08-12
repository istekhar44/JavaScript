let btn = document.querySelector("#btn1");   //Arrow function on the div
btn.onclick=()=>{
    console.log("btn1 was Clicked ");
    let a = 45;
    a++;
    console.log(a);

};

let div = document.querySelector("div");    //when hover the on the div it print certain message via function
div.onmouseover =() =>{
    console.log("Your are in inside the div");
    let b = 48;
    b++;
    console.log(b);


};



