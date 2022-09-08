import React from "react"
import "./formAddNewVideo.css"
import PropTypes from "prop-types"
import Button from "../../../primitives/button/index"
import SvgSuc from "../../../primitives/icons/svg/Successful.svg"
import FieldInput from "../../../primitives/fieldInput/fieldInput"

export default function FormAddNewVideo({ variants, videoimg }) {
  if (variants === "main") {
    return (
      <div className="formAddVideoSuccessful">
        <div className="containerAddVideoSuccessful">
          <div className="titleAddVideo">
            <div className="heading1">
              Add <span className="textRed">New </span> Video
            </div>
          </div>
          <div className="containerInput">
            <div className="titleInput">
              <div className="heading3">Youtube Link</div>
            </div>
            <div className="itemInput">
              <FieldInput type="url" placeholder="Past link..." />
            </div>
          </div>
          <div className="containerInput">
            <div className="titleInput">
              <div className="heading3">Name of video</div>
            </div>
            <div className="itemInput">
              <FieldInput type="text" placeholder="Type name..." />
            </div>
          </div>
          <div className="containerInput">
            <div className="titleInput">
              <div className="heading3">Description</div>
            </div>
            <div className="itemInput">
              <FieldInput lines="2" placeholder="Type description..." />
            </div>
          </div>
          <div className="containerButtonsAddVideo">
            <Button variant="transparent" label="Cancel" />
            <Button variant="main" label="Submit" />
          </div>
        </div>
      </div>
    )
  }
  if (variants === "load") {
    return (
      <div className="formAddVideoSuccessful">
        <div className="containerAddVideoSuccessful">
          <div className="titleAddVideo">
            <div className="heading1">
              Add <span className="textRed">New </span> Video
            </div>
          </div>
          <div className="containerImgAddVideo">
            <div className="containerSpinerAddVideo">
              <div className="lds-ring">
                <div />
                <div />
                <div />
              </div>
            </div>
            <img src={videoimg} alt="imgVideo" />
          </div>
          <div className="titleImg">Loading...</div>
          <div className="containerButtonToVideo">
            <Button variant="main" label="Start Now" disabled>
              Start Now
            </Button>
          </div>
        </div>
      </div>
    )
  }
  if (variants === "successful") {
    return (
      <div className="formAddVideoSuccessful">
        <div className="containerAddVideoSuccessful">
          <div className="titleAddVideo">
            <div className="heading1">
              Add <span className="textRed">New </span> Video
            </div>
          </div>
          <div className="containerImgAddVideo">
            <div className="containerSvgAddVideo">
              <img src={SvgSuc} alt="Tick" />
            </div>
            <img src={videoimg} alt="imgVideo" />
          </div>
          <div className="titleImg">Successful</div>
          <div className="containerButtonToVideo">
            <Button variant="main" label="To Video">
              To Video
            </Button>
          </div>
        </div>
      </div>
    )
  }
  return <div>Wrong</div>
}

FormAddNewVideo.propTypes = {
  variants: PropTypes.string,
  videoimg: PropTypes.string,
}

FormAddNewVideo.defaultProps = {
  variants: undefined,
  videoimg: undefined,
}
