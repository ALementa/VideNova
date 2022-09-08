import React from "react"
import "./userCard.css"
import PropTypes from "prop-types"
import VideosSvg from "../icons/svg/videos.svg"
import LikesSvg from "../icons/svg/likes.svg"
// import H from "../heading/heading"
import UserView from "../userprofileview/userprofileview"
import Button from "../button/index"
import avatar from "../../../assets/avatars/Anna_May.png"

// eslint-disable-next-line react/prop-types
export default function UserCard({ image, nameuser, videos, likes }) {
  return (
    <div className="cardUserContainer">
      <UserView image={image} size="medium" nameuser={nameuser} />
      <div className="containerVideosLikes">
        <div className="containerVideo">
          <img src={VideosSvg} alt="Video Pic." />
          <div className="heading4">{videos} videos</div>
        </div>
        <div className="containerLikes">
          <img src={LikesSvg} alt="Likes Pic." />
          <div className="heading4">{likes} likes</div>
        </div>
      </div>
      <div className="containerButtonUserCard">
        <Button variant="main" label="To profile" />
      </div>
    </div>
  )
}

UserView.propTypes = {
  image: PropTypes.string,
  nameuser: PropTypes.string,
  videos: PropTypes.string,
  likes: PropTypes.string,
}

UserView.defaultProps = {
  image: avatar,
  nameuser: "Anna May",
  size: "small",
}
