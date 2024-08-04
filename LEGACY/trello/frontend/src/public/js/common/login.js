var mode = '';

const onClickButton = () => {
    if(mode === 'SIGN'){
        onClickSignButton();
    }else{
        onClickLoginButton()
    }
}

const onClickLoginButton = async() => {
    let userObj = user();
    
    if(verifyIfIsEmpty(userObj.email)){
        showAlert("Please, fill the email field!");
        return
    }

    if(verifyIfIsEmpty(userObj.password)){
        showAlert("Please, fill the password field!");
        return
    }

    let response = await login(userObj);
    if(response.statusCode === 200){
        setCookie("ref", response.obj.token, 28800)
        setCookie("id", response.obj.id, 0)
        setCookie("email", user().email);
        setCookie("user_reference", response.obj.reference);
        if(response.obj.menager === null){
            document.location.href = '/profile'
        }else{
            sessionStorage.setItem("menager", JSON.stringify(response.obj.menager))
            document.location.href = '/home'
        }
    }else if(response.statusCode === 401) {
        showAlert(response.info);
    }else{
        showAlert(response.message);
    }
}

const onClickSignButton = async() => {
    let userObj = user();
    
    if(verifyIfIsEmpty(userObj.email)){
        showAlert("Please, fill the email field!");
        return
    }

    if(verifyIfIsEmpty(userObj.password)){
        showAlert("Please, fill the password field!");
        return
    }

    if (verifyIfIsEmpty(userObj.confirmPassword)) {
        showAlert("Please, fill the password field!");
        return
    }

    if (userObj.password !== userObj.confirmPassword) {
        showAlert("Password's are not equals!");
        return
    }

    let response = await createUser(userObj);
    if(response.statusCode === 200){
        setCookie("ref", response.obj.token, 28800)
        setCookie("id", response.obj.user.id, 0)
        setCookie("email", response.obj.user.email);
        setCookie("user_reference", response.obj.user.reference);
        sessionStorage.setItem("menager", JSON.stringify(response.obj.menager))
        document.location.href = '/profile'
    }else if (response.statusCode === 500) {
        showAlert(response.message);
    } else {
        showAlert(response.info);
    }
}

const user = () => {
    let email = document.getElementById('email-field').value
    let password = document.getElementById('password-field').value
    let confirmPasswordField = document.getElementById('confirm-password-field').value

    let user = {
        email: email,
        password: password,
        confirmPassword: confirmPasswordField
    };

    return user;
}

const onClickLinkSignUp = () => {
    let backToLogin = document.getElementById('back-to-login')
    let recoverPassword = document.getElementById('recover-password')
    let signArea = document.getElementById('sign-area')
    let loginButton = document.getElementById('login-button');
    let confirmPasswordField = document.getElementById('confirm-password-field')
  
    loginButton.innerText = 'SIGN';  
    recoverPassword.style.display = 'none'
    signArea.style.display = 'none'
    backToLogin.style.display = 'flex'
    document.title = 'Sign'
    confirmPasswordField.style.display = 'flex'
    mode = 'SIGN'
}

const onClickLinkLogin = () => {
    let backToLogin = document.getElementById('back-to-login')
    let recoverPassword = document.getElementById('recover-password')
    let signArea = document.getElementById('sign-area')
    let loginButton = document.getElementById('login-button');
    let confirmPasswordField = document.getElementById('confirm-password-field')
  
    loginButton.innerText = 'LOGIN';  
    recoverPassword.style.display = 'flex'
    signArea.style.display = 'flex'
    backToLogin.style.display = 'none'
    document.title = 'Login'
    confirmPasswordField.style.display = 'none'
    mode = 'LOGIN'
}

const showAlert = (message) => {
    let alertContent = document.getElementById('alert-content')
    let alert = document.getElementById('alert')
    alertContent.style.display = 'flex'
    alert.innerText = message
    alert.style.display = 'flex'
    alert.style.fontSize = '15px'

    setTimeout(() => {
        alertContent.style.display = 'none'
        alert.style.display = 'none'
    }, 10000);
}