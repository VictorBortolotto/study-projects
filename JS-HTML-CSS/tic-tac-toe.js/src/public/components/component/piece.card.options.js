var playerId = ""

const optionsCardComponent = (id) => {
  playerId = id
  return `<div class="piece-options" id="piece-options-card">
      <div class="title">
        <h1 class="options-title">Choose Your Game Piece</h1>
      </div>
      <div class="options">
        <div class="piece-option">
          <img src="../assets/circle.svg" alt="" class="piece-option-img" id="piece-1" onclick="onChoosePiece(this.id)">
        </div>
        <div class="piece-option">
          <img src="../assets/x.svg" alt="" class="piece-option-img" id="piece-2" onclick="onChoosePiece(this.id)">
        </div>
      </div>
      <button class="button-cancel" onclick="onClickCancelOptions()">
        CANCEL
      </button>
    </div>`
}

const onChoosePiece = (id) => {
  let firstPlayerToChoose = document.getElementById(playerId)
  let secondPlayerToChoose = playerId === 'piece-player-1' ? document.getElementById('piece-player-2') : document.getElementById('piece-player-1')
  definePieces(firstPlayerToChoose, secondPlayerToChoose, id)
  onClickCancelOptions()
}

const definePieces = (firstPlayerToChoose, secondPlayerToChoose, idPiece) => {
  let piece = document.getElementById(idPiece)
  firstPlayerToChoose.src = piece.src
  secondPlayerToChoose.src = idPiece === 'piece-1' ? document.getElementById('piece-2').src : document.getElementById('piece-1').src
}

const onClickCancelOptions = () => {
  let cardOptions = document.getElementById("piece-options-card")
  cardOptions.remove()
}