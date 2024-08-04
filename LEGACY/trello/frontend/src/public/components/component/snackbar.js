const showSnackbar = (type, message) => {
    let snackbar = document.getElementById('snackbar');
    snackbar.innerHTML = message;
    snackbar.style.background = snackbarColor(type);
    snackbar.style.color = 'white';
    snackbar.className = "show";
    setTimeout(() => { 
        snackbar.className = snackbar.className.replace("show", ""); 
    }, 3000);
}

const createSnackBarOn = (id) => {
    let mainContainer = document.getElementById(id)
    let div = document.createElement('div')
    div.id = 'snackbar'
    mainContainer.appendChild(div)
}

const removeSnackBar = () => {
    let snackbar = document.getElementById('snackbar');
    snackbar.remove();
}

const snackbarColor = (type) => {
    let color = '';
    if(type === 'error'){
        color = 'rgb(235, 77, 77)'
    }else if(type === 'info'){
        color = 'rgb(72, 72, 233)'
    }else if(type === 'warning') {
        color = 'rgb(255, 184, 52)'
    }else {
        color = 'rgb(43, 187, 43)'
    }

    return color;
}