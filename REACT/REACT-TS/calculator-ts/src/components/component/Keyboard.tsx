import React, { useState } from "react";
import '../component.style/Keyboard.css'
import Button from "../common/common.component/Button";

type KeyboardProps = {
  displayText: string,
  setText: (text: string) => void
}

export default function Keyboard({ displayText, setText }: KeyboardProps) {

  const handleButtonClick = (buttonText: string) => {
    setText(displayText + buttonText); 
  };

  const handleOnClickEquals = () => {
    if (!isLastCharacterANumber()) return 
    displayText = onChangeSignal()
    let result = ""
    try {
      result = eval(displayText.toString())
    } catch (e) {
      setText('Error on ' + displayText)
      return
    }
    setText(result.toString())
  }

  const hancleOnClickClear = () => {
    setText('')
  }

  const hancleOnClickBackspace = () => {
    displayText = displayText.toString().substring(0, displayText.toString().length - 1)
    setText(displayText)
  }

  const onChangeSignal = () => {
    if (!displayText) return ''
    displayText = displayText.replaceAll('X', '*')
    return displayText
  }

  const isLastCharacterANumber = () => {
    let character = displayText.toString().substring(displayText.toString().length - 1, displayText.toString().length);
    return ['.', '(', '+', '-', '/', 'X'].indexOf(character) < 0
  }

  return (
    <div className="Keyboard">
      <Button text="AC" onClick={hancleOnClickBackspace} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="C" onClick={hancleOnClickClear} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="(" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text=")" onClick={handleButtonClick} style={{background: 'orange', color: 'white'}}></Button>
      <Button text="1" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="2" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="3" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="+" onClick={handleButtonClick} style={{background: 'orange', color: 'white'}}></Button>
      <Button text="4" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="5" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="6" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="-" onClick={handleButtonClick} style={{background: 'orange', color: 'white'}}></Button>
      <Button text="7" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="8" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="9" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="/" onClick={handleButtonClick} style={{background: 'orange', color: 'white'}}></Button>
      <Button text="." onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="0" onClick={handleButtonClick} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="=" onClick={handleOnClickEquals} style={{background: 'transparent', color: 'white', border: 'solid white 1px'}}></Button>
      <Button text="X" onClick={handleButtonClick} style={{background: 'orange', color: 'white'}}></Button>
    </div>
  )
}