import React from "react"
import "./video.css"
import PropTypes from "prop-types"

export default function Video(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const srcVideo = props.urlVideo
  const eq = "="
  const arrUrl = srcVideo.split(eq)
  const idVideo = arrUrl[1]
  const newUrlVideo = `https://www.youtube.com/embed/${idVideo}`

  return (
    <div className="videoYoutube">
      <iframe
        width="314"
        height="178"
        src={newUrlVideo}
        title="YouTube video player"
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        allowFullScreen
      />
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <div className="h3">{props.titleVideo}</div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <div className="text">{props.descriptionVideo}</div>
    </div>
  )
}
Video.propTypes = {
  urlVideo: PropTypes.string,
  titleVideo: PropTypes.string,
  descriptionVideo: PropTypes.string,
}

Video.defaultProps = {
  urlVideo: undefined,
  titleVideo: undefined,
  descriptionVideo: undefined,
}

// "url": "https://www.youtube.com/watch?v=JCOJS1wWmeo",
//   "title": "Музика для праці",
//   "description": "Нереально крутий трек, коли починаєш під нього працювати, то все ніби саме складається і виходить."
