let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let meg = document.querySelector("#msg");

let turnO = true;  //turnX turnO

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame = () =>{   //Reset Button
    turnO = true ;             //back to the initial position
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach ( (box)=>{                    //for Each Loop performing the x and o 
    box.addEventListener("click" ,() =>{
        console.log("Box was Clicked");

        
        if(turnO){
            box.innerText ="O";
            turnO = false; 
        }
        else{
            box.innerText ="X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        });
       

});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
     }
};



const showWinner = (winner) =>{
    msg.innerText = `Congratulation!, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    

}

const checkWinner = () =>{            //loop Check the Winner  store the varible in the value 
    for(let pattern of winPatterns){
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;          
         let pos3Val = boxes[pattern[2]].innerText;

         if(pos1Val !="" && pos2Val !="" && pos3Val !=""){    //Pattern match condition in the Row and the column
            if(pos1Val == pos2Val && pos2Val== pos3Val ){
                console.log("Winner  ", pos1Val);
            }
            showWinner(pos1Val);    //Make the funtion to show the winner 
            break;  //Exit loop when winner is found
         }
    }
            
    if(!winnerFound){
        checkDwaw();
    }
};


newGameBtn.addEventListener("click" , resetGame);
resetGameBtnPopup.addEventListener("click" , resetGame);
reset.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);



