const configurationCardComponent = () => {
  return `<div class="configuration-options" id="configuration-card">
      <div class="configuration-header"><button class="button-close-configuration" onclick="onClickClose()">X</button></div>
      <div class="configuration-content">
        <label for="" class="label-configuration">Player 1 piece:</label>
        <div class="piece-configuration">
          <img src="../assets/plus.svg" alt="" class="piece-img" id="piece-player-1" onclick="onClickChoosePiece(this.id)">
        </div>
        <label for="" class="label-configuration">Player 2 piece:</label>
        <div class="piece-configuration">
          <img src="../assets/plus.svg" alt="" class="piece-img" id="piece-player-2" onclick="onClickChoosePiece(this.id)">
        </div>
      </div>
      <button class="button-configuration-confirm" onclick="onClickConfirmConfiguration()">
        CONFIRM
      </button>
    </div>`
}

const openConfigurationCard = () => {
  let mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML += configurationCardComponent()
  fillOptionsWhenIsCardOpen()
}

const onClickChoosePiece = (id) => {
  let mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML += optionsCardComponent(id)
}

const onClickClose = () => {
  let configurationOption = document.getElementById('configuration-card')
  configurationOption.remove()
}

const onClickConfirmConfiguration = () => {
  let player1 = document.getElementById('piece-player-1')
  let player2 = document.getElementById('piece-player-2')
  setSessionStorage("player-1", definePlayerPiece(player1.src))
  setSessionStorage("player-2", definePlayerPiece(player2.src))
  onClickClose()
}

const definePlayerPiece = (imageSrc) => {
  let piece = ""
  if (imageSrc.indexOf("circle") > 0) {
    piece = imageSrc.substring(imageSrc.indexOf("circle"), imageSrc.indexOf("."))
  } else {
    piece = imageSrc.substring(imageSrc.indexOf("x"), imageSrc.indexOf("."))
  }

  return piece
}

const fillOptionsWhenIsCardOpen = () => {
  let player1 = document.getElementById('piece-player-1')
  let player2 = document.getElementById('piece-player-2')
  if (sessionStorageLength() === 0) return
  if (getFormSessionStorage('player-1') === 'x') {
    player1.src = '../assets/x.svg'
    player2.src = '../assets/circle.svg'
  } else {
    player1.src = '../assets/circle.svg'
    player2.src = '../assets/x.svg'
  }
}