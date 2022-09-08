import React from "react"
// import { NavLink } from "react-router-dom"
import "./style.css"
import Button from "../../primitives/button/index"
import VN from "../../primitives/icons/svg/videonovablue.svg"

function Header() {
  return (
    <div className="header">
      <div className="contIcon">
        <a className="linkVideonovaBlue" href="/">
          <img src={VN} alt="Video Nova" />
        </a>
      </div>
      <Button variant="transparent" label="SignUp" />
    </div>
  )
}

export default Header
