export function isEmptyOrNull(value) {
  return value === null || value === undefined || value === '';
}

export function isPasswordsEquals(password, confirmPassword) {
  return password === confirmPassword;
}

export function setSessionStorage(key,value){
  sessionStorage.setItem(key,value)
}

export function getSessionStorage(key){
  return sessionStorage.getItem(key)
}

export function removeFromSessionStorage(key) {
  sessionStorage.removeItem(key)
}

export function setLocalStorage(key,value){
  localStorage.setItem(key,value)
}

export function getLocalStorage(key){
  return localStorage.getItem(key)
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key)
}