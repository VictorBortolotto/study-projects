const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, value)
}

const getFormSessionStorage = (key) => {
  return sessionStorage.getItem(key)
}

const removeFromSessionStorage = (key) => {
  sessionStorage.removeItem(key)
}

const sessionStorageLength = () => {
  return sessionStorage.length
}