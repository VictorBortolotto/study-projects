const onClickStart = () => {
  if (sessionStorageLength() === 0) {
    showSnackbar("warn", 'Please configure the players pieces before start the game!')
    return
  }

  window.location.href = '/board'
}