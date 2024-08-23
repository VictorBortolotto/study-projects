function showSnackbar(snackbarType, message) {
  var snackbar = document.getElementById("snackbar");

  snackbar.className = "show";
  snackbar.innerHTML = message;
  snackbar.style.backgroundColor = defineSnackbarColor(snackbarType)

  setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

const defineSnackbarColor = (messageType) => {
  let color = '';
  
  if (messageType === 'warn') {
    color = 'rgb(254, 183, 52)'
  }

  if (messageType === 'success') {
    color = 'rgb(95, 243, 95)'
  }

  if (messageType === 'error') {
    color = 'rgb(236, 91, 91)'
  }

  if (messageType === 'info') {
    color = 'rgb(76, 76, 249)'
  }

  if (messageType === 'alert') {
    color = 'rgb(236, 236, 34)'
  }

  return color;
}