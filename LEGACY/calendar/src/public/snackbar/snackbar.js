function showToast(date) {
  let x = document.getElementById("snackbar");
  
  x.className = "show";
  x.innerHTML = date

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}