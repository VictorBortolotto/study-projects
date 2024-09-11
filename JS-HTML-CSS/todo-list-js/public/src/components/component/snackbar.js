function showSnackbar(snackbarType, message) {
  let snackbar = document.getElementById("snackbar");

  snackbar.className = "show";
  snackbar.style.background = snackbarType
  snackbar.innerText = message

  setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}