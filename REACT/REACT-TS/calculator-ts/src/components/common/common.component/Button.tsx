import React from "react";
import '../common.component.style/Button.css'

type ButtonStyleProps = {
  background?: string,
  color?: string,
  border?: string,
  width?: string,
  height?: string
}

type ButtonProps = {
  text: string,
  onClick: (text: string) => void,
  style?: ButtonStyleProps
}

export default function Button({ text, onClick, style }: ButtonProps) {
  return <button className="Button" onClick={() => onClick(text)} style={style}>{text}</button>
}