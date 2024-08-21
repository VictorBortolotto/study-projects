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
      <button class="button-configuration-confirm">
        CONFIRM
      </button>
    </div>`
}

const openConfigurationCard = () => {
  let mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML += configurationCardComponent()
}

const onClickChoosePiece = (id) => {
  let mainContainer = document.getElementById('main-container')
  mainContainer.innerHTML += optionsCardComponent(id)
}

const onClickClose = () => {
  let configurationOption = document.getElementById('configuration-card')
  configurationOption.remove()
}