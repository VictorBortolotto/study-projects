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
    displayText = onChangeSignal()
    setText(eval(displayText))
  }

  const onChangeSignal = () => {
    if (!displayText) return ''
    displayText = displayText.replace('X', '*')
    return displayText
  }

  return (
    <div className="Keyboard">
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