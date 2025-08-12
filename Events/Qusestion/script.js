//Create the toggle button that changes the screen to dark-mode when clicked & light-mode when cliked Again?
let mode = document.querySelector("#mode");
let CurrMode = "Dark"; //Light

mode.addEventListener("click" ,()=>{
    if(CurrMode === "light"){
        CurrMode = "dark";
        document.querySelector("body").style.background = "black";
    }
    else{
        CurrMode = "light"
         document.querySelector("body").style.background = "white";
    }

    console.log(CurrMode);
});

