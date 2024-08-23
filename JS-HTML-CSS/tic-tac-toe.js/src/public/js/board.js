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
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  setNewPlayerGameMove(data)
}

const setNewPlayerGameMove = (player) => { 
  if (player.indexOf('player-1') > 0) {
    let player2img = document.getElementById('player-2-area')
    player2img.src = `../assets/${getFormSessionStorage("player-2")}.svg`
  } else {
    let player1img = document.getElementById('player-1-area')
    player1img.src = `../assets/${getFormSessionStorage("player-1")}.svg`
  }
}