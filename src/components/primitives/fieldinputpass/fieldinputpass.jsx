/* eslint-disable */
import React, {useState} from 'react'
import FieldInput from "../fieldInput/fieldInput"
import "./fieldinputpass.css"
import PropTypes from "prop-types"
import SeePass from './svg/seepasword.svg'
import NoSeePass from './svg/noseepasword.svg'
// import {ReactComponent} from "*.svg";

export default function FieldInputPass(
  {
    type,
    label,
    textError,
    lines,
    ...args
  }) {
  const [pwd, setPwd] = useState('');
  const [passVisible, setPassVisible] = useState(false);
  // const handleChangePasswordVisibility = () => {
  //   setPassVisible(!passVisible);
  // };
  // console.log(type)
  const inputRows = lines || 1;
  if (inputRows <= 1) {
    return (
      <div className="fieldInputPass">
        <FieldInput
          type={passVisible ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          {
            ...args
          }
        />
        <img
          title={passVisible ? "Hide password" : "Show password"}
          className="inputEye"
          // onClick={handleChangePasswordVisibility}
          onClick={() => setPassVisible(!passVisible)}
          src={passVisible ? SeePass : NoSeePass} alt="eye"/>
      </div>
    );
  } else return (
    <div className="fieldInput">
      <textarea
        {
          ...args
        }
        rows={inputRows}
      ></textarea>
      <span>{textError}</span>
    </div>
  )
}

FieldInputPass.propTypes = {
  /**
   * You can enter the input field type
   */
  type: PropTypes.string,
  /**
   *This will be an input title
   */
  label: PropTypes.string,
  /**
   *Here is the text of the error
   */
  textError: PropTypes.string,
  /**
   *Here will be the number of lines of input from 1-infinity
   */

  lines: PropTypes.number,
  /**
   * Native input disabled attribute
   */
  disabled: PropTypes.bool,
  /**
   * Validate value of form input
   */
  valid: PropTypes.bool,
  /**
   * Native input required attribute
   */
  required: PropTypes.bool
}

FieldInputPass.defaultProps = {
  label: undefined,
  textError: undefined,
  lines: 1,
  disabled: false,
  type: undefined,
}
