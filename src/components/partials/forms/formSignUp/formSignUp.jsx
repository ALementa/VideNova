import React, { useState } from "react"
import "./formSignUp.css"
import FieldInput from "../../../primitives/fieldInput/fieldInput"
import FieldInputPass from "../../../primitives/fieldinputpass/fieldinputpass"
import Button from "../../../primitives/button/index"
import ButtonLoader from "../../../primitives/button/buttonLoader"
import FormSignIn from "../formSignIn/formSignIn"

export default function FormSignUp(args) {
  // eslint-disable-next-line react/destructuring-assignment
  const isLoading = args.load
  // eslint-disable-next-line react/destructuring-assignment
  let isHidden = args.error
  const displayBlockNone = isHidden ? "block" : "none"
  const inputError = isHidden
    ? "containerInputSignIn containerInputSignInError"
    : "containerInputSignIn"

  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const handlePassCheck = () => {
    if (confirmPass === pass) {
      isHidden = true
    } else {
      isHidden = false
    }
  }
  return (
    <div className="containerFormSignUp">
      <div className="containerCross">X</div>
      <div className="containerSignUp">
        <div className="heading1">
          Sing <span className="textRed">Up</span>
        </div>
        {/* eslint-disable-next-line react/style-prop-object */}
        <div className="textError" style={{ display: displayBlockNone }}>
          <div className="heading5">
            Your Password does not match. Please, try again
          </div>
        </div>
        <div className="containerInputSignUp">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="heading3" htmlFor="name">
            Name
          </label>
          <FieldInput type="text" placeholder="Type name..." id="name" />
        </div>
        <div className="containerInputSignUp">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="heading3" htmlFor="password">
            Password
          </label>
          <FieldInputPass
            borderInput
            type="password"
            id="password"
            placeholder="Type password..."
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
        </div>
        <div className={inputError}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="heading3" htmlFor="password">
            Repeat Password
          </label>
          <FieldInputPass
            borderInput
            type="password"
            id="password"
            placeholder="Repeat password..."
            value={confirmPass}
            onChange={(event) => setConfirmPass(event.target.value)}
          />
        </div>
        <div className="containerButtonSignUp">
          {isLoading ? (
            <ButtonLoader
              className="button__loader"
              variant="main"
              label="Sign Up"
              disabled
            />
          ) : (
            <Button variant="main" label="Sign Up" onClick={handlePassCheck} />
          )}
        </div>
        <div className="containerSignUpSignIn">
          <div className="heading4">
            Already have an account? <Button variant="link" label="Sign In" />
          </div>
        </div>
      </div>
    </div>
  )
}

FormSignIn.propTypes = {}

FormSignIn.defaultProps = {}
