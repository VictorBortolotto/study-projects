import React from "react";
import '../styles/Planets.css'
import Sun from "../components/component/Sun";
import Mercury from "../components/component/Mercury";
import Venus from "../components/component/Venus";
import Earth from "../components/component/Earth";
import Mars from "../components/component/Mars";
import Jupiter from "../components/component/Jupiter";
import Saturn from "../components/component/Saturn";
import Uranus from "../components/component/Uranus";
import Neptune from "../components/component/Neptune";

export default function Planets() {
  return <div className="container">
    <div className="trajectory-neptune">
      <Neptune></Neptune>
      <div className="trajectory-uranus">
        <Uranus></Uranus>
        <div className="trajectory-saturn">
          <Saturn></Saturn>
          <div className="trajectory-jupiter">
            <Jupiter></Jupiter>
            <div className="trajectory-mars">
              <Mars></Mars>
              <div className="trajectory-earth">
                <Earth></Earth>
                <div className="trajectory-venus">
                  <Venus></Venus>
                  <div className="trajectory-mercury">
                    <Mercury></Mercury>
                    <Sun></Sun>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}