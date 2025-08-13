let boxes = document.querySelectorAll(".box");
        let reset = document.querySelector(".reset");
        let newGameBtn = document.querySelector("#new-btn");
        let newGameBtnPopup = document.querySelector("#new-btn-popup");
        let msgContainer = document.querySelector(".msg-container");
        let msg = document.querySelector("#msg"); // Fixed: was 'meg'

        let turnO = true; // turnX turnO

        const winPatterns = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
        ];

        const resetGame = () => {
            turnO = true;
            enableBoxes();
            msgContainer.classList.add("hide");
        };

        boxes.forEach((box) => {
            box.addEventListener("click", () => {
                console.log("Box was clicked");
                if (turnO) {
                    box.innerText = "O";
                    turnO = false;
                } else {
                    box.innerText = "X";
                    turnO = true;
                }
                box.disabled = true;
                checkWinner(); // Fixed: was 'chechWinner'
            });
        });

        const disableBoxes = () => {
            for (let box of boxes) {
                box.disabled = true;
            }
        };

        const enableBoxes = () => {
            for (let box of boxes) {
                box.disabled = false; // Fixed: was 'true'
                box.innerText = "";
            }
        };

        const showWinner = (winner) => {
            msg.innerText = `Congratulations! Winner is ${winner}`; // Fixed: spelling
            msgContainer.classList.remove("hide");
            disableBoxes();
        };

        const checkDraw = () => {
            let allFilled = true;
            for (let box of boxes) {
                if (box.innerText === "") {
                    allFilled = false;
                    break;
                }
            }
            if (allFilled) {
                msg.innerText = "It's a Draw!";
                msgContainer.classList.remove("hide");
            }
        };

        const checkWinner = () => { // Fixed: was 'chechWinner'
            let winnerFound = false;
            for (let pattern of winPatterns) {
                let pos1Val = boxes[pattern[0]].innerText; // Fixed: order
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;

                if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
                    if (pos1Val === pos2Val && pos2Val === pos3Val) {
                        console.log("Winner:", pos1Val);
                        showWinner(pos1Val);
                        winnerFound = true;
                        break; // Exit loop when winner is found
                    }
                }
            }
            
            // Check for draw only if no winner found
            if (!winnerFound) {
                checkDraw();
            }
        };

        newGameBtn.addEventListener("click", resetGame);
        newGameBtnPopup.addEventListener("click", resetGame);
        reset.addEventListener("click", resetGame); // Fixed: was 'resetGame.addEventListener'