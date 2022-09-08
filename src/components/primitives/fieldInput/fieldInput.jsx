import React from "react"
import "./fieldInput.css"
import PropTypes from "prop-types"

export default function FieldInput({ lines, ...args }) {
  const inputRows = lines || 1
  if (inputRows <= 1) {
    return (
      <div className="fieldInput">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...args} />
      </div>
    )
  }
  return (
    <div className="fieldInput">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <textarea {...args} rows={inputRows} />
    </div>
  )
}

FieldInput.propTypes = {
  /**
   * You can enter the input field type
   */
  type: PropTypes.string,
  /**
   *Here will be the number of lines of input from 1-infinity
   */

  lines: PropTypes.number,
  /**
   * Native input disabled attribute
   */
  disabled: PropTypes.bool,
}

FieldInput.defaultProps = {
  lines: 1,
  disabled: false,
  type: "text",
}
