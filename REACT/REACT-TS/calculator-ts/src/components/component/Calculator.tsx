import React, { useState } from "react";
import '../component.style/Calculator.css'
import { Display } from "./Display";
import Keyboard from "./Keyboard";

export default function Calculator() {
  const [text, setText] = useState('');

  return (
    <div className="Container">
      <div className="Display-Area">
        <Display text={text}></Display>
      </div>
      <div className="Keyboard-Area">
        <Keyboard displayText={text} setText={setText}></Keyboard>
      </div>
    </div>
  )
}