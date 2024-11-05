var timer = 60;
var score = 0;
var timerVal;

function scoreCounter() {
  
  score += 1;
  document.querySelector(".score").innerHTML = score;
}

function makeBubble() {
    var cluster = "";
    for (var i = 1; i <= 300; i++) {
      var rand = Math.floor(Math.random() * 10);
      cluster += `<div class="bubble">${rand}</div>`;
    }

    document.querySelector(".bubble-div").innerHTML = cluster;
  }



function checker() {
  var bubbleVal = document.querySelectorAll(".bubble");
  var hitVal = document.querySelector(".hit").innerText;
  // console.log("I am running")
  bubbleVal.forEach((bubble) => {

    bubble.addEventListener("click", function (detail) {
    if (bubble.textContent == hitVal) {
      scoreCounter();
      makeBubble();
      hitValue();
      checker();
    }
  });
  });
  
}






  function hitValue() {
    var random = Math.floor(Math.random() * 10);
    var hitVal = (document.querySelector(".hit").innerHTML = random);
    // console.log(hitVal);
  }

  function runTimer() {
    timerVal = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector(".timer").textContent = timer;
      } else {
        document.querySelector(
          ".bubble-div"
        ).innerHTML = `<h1>Game Over</h1> <br>
              <button class = "btn" onclick="gameStart()">Play Again</button>
              `;
        clearInterval(timerVal);
      }
    }, 1000);
  }

function gameStart() {
  timer = 60;
  score = 0;
  document.querySelector(".score").innerHTML = score; 
  clearInterval(timerVal);
  makeBubble();
  runTimer();
  hitValue();
  checker()
  
}
