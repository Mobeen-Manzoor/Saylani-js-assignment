
let score = 0;
const squares = document.querySelectorAll(".square");
const totalResult = document.getElementById('totalResult')
const status = document.getElementById('status')
const scores = document.getElementById('result')
const totalScores = {playerScore: 0}
console.log(squares)


function getComputerChoice(){
  let arr = ['Rock', 'Paper', 'Sessior']
  let rpsChoice = Math.floor(Math.random() * 3)
  return arr[rpsChoice]
}

function getResult(player, comp){
  
  if(comp === player){
    score = 0
  } 
  else if(player == 'Rock' && comp == 'Sessior'){
    score = 1 
  }
  else if(player == 'Paper' && comp == 'Rock'){
    score = 1 
  }
  else if(player == 'Sessior' && comp == 'Paper'){
    score = 1 
  }
  else{
    score = -1
  }
  return score
}

function onClickRPS(playerChoice){
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  if(score === 0){
    status.innerText = "Match Draw"
  }
  else if(score === 1){
    status.innerText = "You Win!"
  }
  else if(score === -1){
    status.innerText = "Ha Ha You Lose! "
  }
  totalScores['playerScore'] += score
  // console.log(totalScores['playerScore'])
  totalResult.innerText = `Player Choice ${playerChoice} vs Computer Choice ${computerChoice}`
  scores.innerText = `Total score is ${totalScores['playerScore']}`

}


squares.forEach((square) =>{
  square.onclick = () => {
    onClickRPS(square.value)
  }
})


function reset(){
  status.innerText = "";
  totalResult.innerText = "";
  scores.innerText = "";
  totalScores.playerScore = 0
}
