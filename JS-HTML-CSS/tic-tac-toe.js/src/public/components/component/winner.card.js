const winnerCardComponent = (player) => {
  return `
    <div class="winner-card" id="win-card">
      <div class="card-title" id="winner-title"> 
        ${player === 'player-1' ? 'PLAYER 1' : 'PLAYER 2'}  WINS
      </div>
      <div class="card-content">
        <img src="../assets/trophy.png" alt="" class="winner-img" id="winner-trophy-img">
      </div>
      <div class="card-footer"> 
        <button class="winner-button" onClick="onClickPlayAgain()">Play again</button>
        <button class="winner-button" onClick="onClickHome()">Home</button>
      </div>
    </div> 
  `
}

const onClickPlayAgain = () => {
  let winCard = document.getElementById('win-card')
  document.getElementById("1").src = '../assets/transparent.svg'
  document.getElementById("2").src = '../assets/transparent.svg'
  document.getElementById("3").src = '../assets/transparent.svg'
  document.getElementById("4").src = '../assets/transparent.svg'
  document.getElementById("5").src = '../assets/transparent.svg'
  document.getElementById("6").src = '../assets/transparent.svg'
  document.getElementById("7").src = '../assets/transparent.svg'
  document.getElementById("8").src = '../assets/transparent.svg'
  document.getElementById("9").src = '../assets/transparent.svg'
  lastPlayerToPlay = ""
  winCard.remove()
}

const onClickHome = () => {
  window.location.href = '/home'
}