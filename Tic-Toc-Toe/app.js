var boxes = document.querySelectorAll(".box")
var turnO = true;
var msg = document.querySelector("#winnerMsg");
var winnerMsg = document.querySelector(".winnerMsg");
var start = document.querySelector(".start")
var resetGame = document.querySelector(".reset")

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

function enableBoxes() {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }


}

start.addEventListener("click", function(){
    turnO = true
    winnerMsg.classList.add("hide");
    enableBoxes()

})
resetGame.addEventListener("click", function(){
    turnO = true
    winnerMsg.classList.add("hide");
    enableBoxes()

})




boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("clicked")
        if(turnO){
            box.style.color = "red"
            box.innerHTML = "O"
            turnO = false;
            
        }else{
            box.style.color = "orange"
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner()

        
    })
})

function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}
function showWinner(winner){
    console.log(`Winner is ${winner}`)
    msg.innerHTML = `Winner is ${winner}`
    winnerMsg.classList.remove("hide");

    disableBoxes();
}

var checkWinner = () => {
    for(let pattern of winningPattern){
        var pos1Val = boxes[pattern[0]].innerText;
        var pos2Val = boxes[pattern[1]].innerText;
        var pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                // console.log("winner")
                showWinner(pos1Val)
    

            } else{
                console.log("Match draw")
            }
        }

    
    }
}


