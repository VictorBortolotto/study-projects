import React from "react";
import '../component.style/Display.css'

type DisplayProps = {
  text: string
}

export function Display({ text }: DisplayProps) {
  return (
    <div className="Display"> 
      <span>{text}</span>
    </div>
  )
} 