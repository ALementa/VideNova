import React from "react"
import "./userprofileview.css"
// import H from "../heading/heading"
import PropTypes from "prop-types"
import avatar from "../../../assets/avatars/Anna_May.png"

export default function Userprofileview({ image, nameuser, size }) {
  const className = `userProfilView__${size}`
  const classImage = `userImage_block__${size}`

  const nameUserSize = () => {
    if (size === "large") {
      return <h1 className="heading1">{nameuser}</h1>
    }
    if (size === "medium") {
      return <h3 className="heading3">{nameuser}</h3>
    }
    if (size === "small") {
      return <h4 className="heading4">{nameuser}</h4>
    }
    return <div>Wrong</div>
  }
  return (
    <div className={className}>
      <div className={classImage}>
        <img src={image} alt="img_user" />
      </div>
      <div className="userName_block">
        {nameUserSize()}
        {/* <H weight={1} children={name} /> */}
      </div>
    </div>
  )
}

Userprofileview.propTypes = {
  image: PropTypes.string,
  nameuser: PropTypes.string,
  size: PropTypes.string,
}

Userprofileview.defaultProps = {
  image: avatar,
  nameuser: "Anna May",
  size: "small",
}
