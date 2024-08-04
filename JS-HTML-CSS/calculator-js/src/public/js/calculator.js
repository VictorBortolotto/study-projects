const onClickNumberButtons = (id) => {
  let button = document.getElementById(id)
  let display = document.getElementById("display")
  display.value += button.textContent
}

const onClickPlusButton = () => {
  let display = document.getElementById("display")
  if (isSignalAfterSignal(display.value)) return
  display.value += "+"
}

const onClickDotButton = () => {
  let display = document.getElementById("display")
  let value = display.value;
  if (isDisplayEmpty(value)) return
  if (isSignalAfterSignal(value)) return
  display.value += "."
}

const onClickMinusButton = () => {
  let display = document.getElementById("display")
  if (isSignalAfterSignal(display.value)) return
  display.value += "-"
}

const onClickMultiplyButton = () => {
  let display = document.getElementById("display")
  let value = display.value;
  if (isDisplayEmpty(value)) return
  if (isSignalAfterSignal(value)) return
  display.value += "X"
}

const onClickDivisionButton = () => {
  let display = document.getElementById("display")
  let value = display.value;
  if (isDisplayEmpty(value)) return
  if (isSignalAfterSignal(value)) return
  display.value += "/"
}

const onClickEqualsButton = () => {
  let display = document.getElementById("display")
  let value = display.value
  if (isDisplayEmpty(value)) return
  value = replaceMultiplySignal(value)
  display.value = eval(value)
}

const onClickClearButton = () => {
  let display = document.getElementById("display")
  display.value = ''
}

const replaceMultiplySignal = (displayValue) => {
  return displayValue.replaceAll('X', '*')
}

const isDisplayEmpty = (displayValue) => {
  return displayValue === undefined || displayValue === null || displayValue === ''
}

const isSignalAfterSignal = (displayValue) => {
  let lastCharacter = lastCharacterInWritten(displayValue)
  let charSignalsList = signalsList()
  return charSignalsList.indexOf(lastCharacter) > 0
}

const signalsList = () => {
  return ['-', '+', 'X', '/', '.']
}

const lastCharacterInWritten = (displayValue) => {
  return displayValue.substring(displayValue.length - 1, displayValue.length)
}