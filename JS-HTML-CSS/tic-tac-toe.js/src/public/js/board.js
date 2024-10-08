var lastPlayerToPlay = ""

const verifyGameConfiguration = () => {
  if (sessionStorageLength() === 0) window.location.href = '/home'
}

const fillPieces = () => {
  let player1img = document.getElementById('player-1-area')
  let player2img = document.getElementById('player-2-area')
  player1img.src = `../assets/${getFormSessionStorage("player-1")}.svg`
  player2img.src = `../assets/${getFormSessionStorage("player-2")}.svg`
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  let house = document.getElementById(ev.target.id)
  if (house === null) return  
  setNewPlayerGameMove(data, house)
}

const setNewPlayerGameMove = (player, house) => { 
  let id = player.substring(0, player.length - 5)
  if (id === lastPlayerToPlay) {
    showSnackbar("error", 'Please wait your turn to play!')
    return
  }
  house.setAttribute('src', `../assets/${getFormSessionStorage(id)}.svg`)  
  lastPlayerToPlay = id
  let isWinner = verifyIfHaveWinner()
  if (isWinner) showWinner(id)
  verifyIfEndedInADraw(isWinner)
}

const showWinner = (player) => {
  let board = document.getElementById('board-container')
  board.innerHTML += winnerCardComponent(player)
}

const verifyIfEndedInADraw = (isWinner) => {
  let transparentImg = "transparent"
  let house1 = document.getElementById("1").src
  let house2 = document.getElementById("2").src
  let house3 = document.getElementById("3").src
  let house4 = document.getElementById("4").src
  let house5 = document.getElementById("5").src
  let house6 = document.getElementById("6").src
  let house7 = document.getElementById("7").src
  let house8 = document.getElementById("8").src
  let house9 = document.getElementById("9").src  

  if ((house1.indexOf(transparentImg) <= 0 && 
    house2.indexOf(transparentImg) <= 0 &&
    house3.indexOf(transparentImg) <= 0 &&
    house4.indexOf(transparentImg) <= 0 &&
    house5.indexOf(transparentImg) <= 0 &&
    house6.indexOf(transparentImg) <= 0 &&
    house7.indexOf(transparentImg) <= 0 &&
    house8.indexOf(transparentImg) <= 0 &&
    house9.indexOf(transparentImg) <= 0) && !isWinner) {
      let board = document.getElementById('board-container')
      board.innerHTML += winnerCardComponent("")
      let winnerTitle = document.getElementById('winner-title')
      winnerTitle.innerText = 'Game ended in a draw'
      let winnerTrophyImg = document.getElementById('winner-trophy-img')
      winnerTrophyImg.src = '../assets/game-draw-end.png'
  }
}

const verifyIfHaveWinner = () => {
  let transparentImg = "transparent"
  let house1 = document.getElementById("1").src
  let house2 = document.getElementById("2").src
  let house3 = document.getElementById("3").src
  let house4 = document.getElementById("4").src
  let house5 = document.getElementById("5").src
  let house6 = document.getElementById("6").src
  let house7 = document.getElementById("7").src
  let house8 = document.getElementById("8").src
  let house9 = document.getElementById("9").src
  let isWinner = false;

  //Verfiy first line 
  if ((house1 === house2 && house1 === house3) && house1.indexOf(transparentImg) <= 0) {
    isWinner = true
  }
  
  //Verfiy second line 
  if ((house4 === house5 && house4 === house6) && house4.indexOf(transparentImg) <= 0) {
    isWinner = true
  }

  //Verfiy third line 
  if ((house7 === house8 && house7 === house9) && house7.indexOf(transparentImg) <= 0) {
    isWinner = true
  }

  //Verfiy first column 
  if ((house1 === house4 && house1 === house7) && house1.indexOf(transparentImg) <= 0) {
    isWinner = true
  }
  
  //Verfiy second column 
  if ((house2 === house5 && house2 === house8) && house2.indexOf(transparentImg) <= 0) {
    isWinner = true
  }

  //Verfiy third column 
  if ((house3 === house6 && house3 === house9) && house3.indexOf(transparentImg) <= 0) {
    isWinner = true
  }

  //Verfiy diagonal right to left
  if ((house1 === house5 && house1 === house9) && house1.indexOf(transparentImg) <= 0) {
    isWinner = true
  }

  //Verfiy diagonal left to right
  if ((house3 === house5 && house3 === house7) && house3.indexOf(transparentImg) <= 0) {
    isWinner = true
  }

  return isWinner
}
