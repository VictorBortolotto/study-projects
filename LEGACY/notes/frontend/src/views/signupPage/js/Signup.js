import { openToast } from "../../../common/js/toast";
import loginService from "../../../services/login.service"
import { isEmptyOrNull, isPasswordsEquals, setSessionStorage } from "../../../utils/utils";

export async function onClickSignUp() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;
  
  if(isEmptyOrNull(email) || isEmptyOrNull(password) || isEmptyOrNull(confirmPassword)) {
    openToast('warn', "Please fill all the fields before continue.")
    return;
  }
  
  if(!isPasswordsEquals(password, confirmPassword)) {
    openToast('warn', "Password's are not equals.")
    return;
  }

  let newUser = {
    email: email,
    password: password
  }

  let response = await loginService.createUser(newUser)
  if(response.statusCode === 200){
    setSessionStorage('token',response.obj.token)
    setSessionStorage('idUser',response.obj.idUser)
    document.location.href = '/home'
  }else{
    openToast('error', response.description)
  }
}


